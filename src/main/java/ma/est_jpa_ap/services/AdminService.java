package ma.est_jpa_ap.services;
import ma.est_jpa_ap.dtos.AdminRegistrationDTO;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AdminService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Admin register(AdminRegistrationDTO adminDTO) {
        Optional<Admin> existingAdmin = adminRepository.findByEmail(adminDTO.getEmail());
        if (existingAdmin.isPresent()) {
            throw new RuntimeException("L'email est déjà utilisé.");
        }

        Admin admin = new Admin();
        admin.setNom(adminDTO.getNom());
        admin.setPrenom(adminDTO.getPrenom());
        admin.setEmail(adminDTO.getEmail());
        admin.setPassword(passwordEncoder.encode(adminDTO.getPassword())); // Encodage du mot de passe

        return adminRepository.save(admin);
    }

    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }
}

/*
    @Service
    public class AdminService implements UserDetailsService {

        private  final AdminRepository adminRepository;
        private  final PasswordEncoder passwordEncoder;
        public AdminService(  AdminRepository adminRepository,@Lazy PasswordEncoder passwordEncoder) {
            this.adminRepository = adminRepository;
            this.passwordEncoder=passwordEncoder;
        }
        //registrement
        public Admin register(AdminRegistrationDTO adminRegistrationDTO) {
            // Vérification si un admin avec le même email existe déjà
            Optional<Admin> existingAdmin = adminRepository.findByEmail(adminRegistrationDTO.getEmail());
            if (existingAdmin.isPresent()) {
                throw new RuntimeException("L'email est déjà pris.");
            }

            // Création de l'admin à partir du DTO
            Admin admin = new Admin();
            admin.setNom(adminRegistrationDTO.getNom());
            admin.setPrenom(adminRegistrationDTO.getPrenom());
            admin.setEmail(adminRegistrationDTO.getEmail());
            admin.setPassword(passwordEncoder.encode(adminRegistrationDTO.getPassword())); // Encodage du mot de passe

            // Sauvegarde de l'admin dans la base de données
            return adminRepository.save(admin);
        }

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            // Recherche de l'admin par email
            Admin admin = adminRepository.findByEmail(email)
                    .orElseThrow(() -> new UsernameNotFoundException("Admin not found with email: " + email));

            return User.builder()
                    .username(admin.getEmail())
                    .password(admin.getPassword())
                    .roles("ADMIN")  // Assignation du rôle "ADMIN"
                    .build();
        }
        public PasswordEncoder getPasswordEncoder() {
            return passwordEncoder;
        }
    }
    /*
        public void save(Admin admin) {
            // Assurez-vous que le mot de passe est crypté avant de l'enregistrer
            admin.setPassword(new BCryptPasswordEncoder().encode(admin.getPassword()));
            adminRepository.save(admin);
        }*/



