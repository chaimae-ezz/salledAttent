package ma.est_jpa_ap.services;
import jakarta.transaction.Transactional;
import ma.est_jpa_ap.dtos.AgentDTO;
import ma.est_jpa_ap.dtos.AgentRegistrationDTO;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.entites.Categorie;
import ma.est_jpa_ap.entites.Tache;
import ma.est_jpa_ap.repositories.AgentRepository;
import ma.est_jpa_ap.repositories.CategorieRepository;
import ma.est_jpa_ap.repositories.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;
import java.util.Optional;
/*
@Service
public class AgentService  implements UserDetailsService {
    private final AgentRepository agentRepository;
    private final PasswordEncoder passwordEncoder;
    private final CategorieRepository categorieRepository;
    private final TacheRepository tacheRepository;

    public AgentService(AgentRepository agentRepository, PasswordEncoder passwordEncoder,
                        CategorieRepository categorieRepository, TacheRepository tacheRepository) {
        this.agentRepository = agentRepository;
        this.passwordEncoder = passwordEncoder;
        this.categorieRepository = categorieRepository;
        this.tacheRepository = tacheRepository;
    }


    @Transactional
    public Agent register(AgentDTO agentDTO) {
        //email
        Optional<Agent> existingUser = agentRepository.findByEmail(agentDTO.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email déja  existe!");
        }

        // Vérifier si la catégorie existe (par ID ou NOM, choisir l'un des deux)
        Categorie categorie;
        if (agentDTO.getCategorieID() != null) {
            categorie = categorieRepository.findById(agentDTO.getCategorieID())
                    .orElseThrow(() -> new RuntimeException("Catégorie invalide !"));
        } else if (agentDTO.getCategorie() != null) {
            categorie = categorieRepository.findByName(agentDTO.getCategorie())
                    .orElseThrow(() -> new RuntimeException("Catégorie non trouvée : " + agentDTO.getCategorie()));
        } else {
            throw new RuntimeException("La catégorie doit être fournie !");
        }

        //tache
        // Vérification et récupération de la tâche
        Tache tache;
        if (agentDTO.getTacheID() != null) {
            tache = tacheRepository.findById(agentDTO.getTacheID())
                    .orElseThrow(() -> new RuntimeException("Tâche invalide !"));
        } else if (agentDTO.getTache() != null) {
            tache = tacheRepository.findByNom(agentDTO.getTache())
                    .orElseThrow(() -> new RuntimeException("Tâche non trouvée : " + agentDTO.getTache()));
        } else {
            throw new RuntimeException("La tâche doit être fournie !");
        }

        Agent agent = new Agent();
        agent.setNom(agentDTO.getNom());
        agent.setPrenom(agentDTO.getPrenom());
        agent.setEmail(agentDTO.getEmail());
        agent.setCategorie(categorie);
        agent.setTache(tache);;
        agent.setPassword(passwordEncoder.encode(agent.getPassword()));
        return agentRepository.save(agent);
    }
    public void save(Agent agent) {
        // Assurez-vous que le mot de passe est crypté avant de l'enregistrer
        agent.setPassword(new BCryptPasswordEncoder().encode(agent.getPassword()));
        agentRepository.save(agent);
    }

    public Optional<Agent> findByNom(String nom) {

        return agentRepository.findByNom(nom);
    }
    public Optional<Agent> findByPrenom(
            String prenom) {
        return agentRepository.findByPrenom(prenom);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Agent agent = agentRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Agent not found with email: " + email));

        return User.builder()
                .username(agent.getEmail())
                .password(agent.getPassword())  // Assurez-vous que le mot de passe est encodé
                .roles("AGENT")  // L'agent a seulement le rôle AGENT
                .build();
    }
}*/