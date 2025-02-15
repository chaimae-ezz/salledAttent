package ma.est_jpa_ap.web;


import ma.est_jpa_ap.dtos.AgentDTO;
import ma.est_jpa_ap.dtos.AgentRegistrationDTO;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.repositories.AgentRepository;
//import ma.est_jpa_ap.services.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
/*
@RestController
@RequestMapping("/agents")
public class AgentController {

    @Autowired
    private AgentRepository agentRepository;
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Agent agent) {
        // Assurer que l'email est unique
        if (agentRepository.findByEmail(agent.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Cet email est déjà utilisé.");
        }
        agent.setActive(false); // L'agent est inactif au début
        agentRepository.save(agent);
        return ResponseEntity.ok("Inscription réussie. Attendez la validation de l'admin.");
    }
    @Autowired
    private AgentService agentService;
    @PostMapping("/register")
    public Agent registerAgent(@RequestBody AgentDTO agentDTO) {
        return agentService.register(agentDTO);
    }





    // Endpoint pour supprimer un agent par son ID


}*/

