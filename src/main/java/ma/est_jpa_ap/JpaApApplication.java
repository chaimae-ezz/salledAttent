package ma.est_jpa_ap;

import ma.est_jpa_ap.dtos.AdminRegistrationDTO;
import ma.est_jpa_ap.dtos.AgentDTO;
import ma.est_jpa_ap.dtos.AgentRegistrationDTO;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.entites.Agent;
//import ma.est_jpa_ap.services.AdminService;
//import ma.est_jpa_ap.services.AgentService;
import ma.est_jpa_ap.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class JpaApApplication  {


    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    public static void main(String[] args) {
        SpringApplication.run(JpaApApplication.class, args);
    }
    @Bean
    CommandLineRunner testAdminRegistration() {
        return args -> {
            System.out.println("Démarrage de l'application...");

            // Vérifier si l'admin existe déjà
            Optional<Admin> existingAdmin = adminRepository.findByEmail("admin@example.com");
            if (existingAdmin.isEmpty()) {
                Admin admin = new Admin();
                admin.setNom("Ezzoubaa");
                admin.setPrenom("chaimae");
                admin.setEmail("chaimae@example.com");
                admin.setPassword(passwordEncoder.encode("password123"));

                adminRepository.save(admin);
                System.out.println("✅ Admin enregistré avec succès !");
            } else {
                System.out.println("⚠️ L'admin existe déjà !");
            }
        };
    }
    /*

    @Bean
    CommandLineRunner testAutentification(AgentService agentService) {
        return args -> {
        //System.out.println("🔍 Test d'authentification en cours...");

        //Création d'un admin de test
        Agent agent = new Agent();
        agent.setNom("agent");
        agent.setPrenom("Test");
        agent.setEmail("agent@example.com");

        agent.setPassword("password123"); // Mot de passe brut

        // Enregistrement de l'admin (le mot de passe sera encodé automatiquement)
        agentService.save(agent);

        try {
            // Vérifier si l'admin peut s'authentifier
            UserDetails user = agentService.loadUserByUsername("a@example.com");
            System.out.println("✅ Authentification réussie pour : " + user.getUsername());
            System.out.println("🔒 Rôles de l'utilisateur : " + user.getAuthorities());
        } catch (Exception e) {
            System.out.println("❌ Échec de l'authentification : " + e.getMessage());
        }
           /* try {
                // Vérifier si l'admin peut s'authentifier
                UserDetails user = agentService.loadUserByUsername("agent@example.com");
                System.out.println("✅ Authentification réussie pour : " + user.getUsername());
                System.out.println("🔒 Rôles de l'utilisateur : " + user.getAuthorities());
            } catch (Exception e) {
                System.out.println("❌ Échec de l'authentification : " + e.getMessage());
            }*/
    };



 /*
    @Override
    public void run(String... args) throws Exception {

        Créer un AgentRegistrationDTO pour l'enregistrement
       AdminRegistrationDTO adminRegistrationDTO = new AdminRegistrationDTO();
        adminRegistrationDTO.setNom("chaimae");
        adminRegistrationDTO.setPrenom("chaimae");
        adminRegistrationDTO.setEmail("chaimae.chaimaee@example.com");
        adminRegistrationDTO.setPassword("password123");

        // Enregistrer ADMIN
        adminService.register(adminRegistrationDTO);

        System.out.println("Admin enregistré avec succès !");
    }*/

