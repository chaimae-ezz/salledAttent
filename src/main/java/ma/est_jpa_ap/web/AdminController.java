package ma.est_jpa_ap.web;


import ma.est_jpa_ap.dtos.AdminRegistrationDTO;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.entites.EtatSession;
import ma.est_jpa_ap.entites.Session;
import ma.est_jpa_ap.repositories.AgentRepository;
import ma.est_jpa_ap.repositories.SessionRepository;
//import ma.est_jpa_ap.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
/*
@RestController
@RequestMapping("/admin")
@Controller
public class AdminController {
    //@Autowired
    private AgentRepository agentRepository;
    //@Autowired
    private SessionRepository sessionRepository;
    private AdminService adminService;
    @Autowired
    public AdminController(AgentRepository agentRepository, SessionRepository sessionRepository, AdminService adminService) {
        this.agentRepository = agentRepository;
        this.sessionRepository = sessionRepository;
        this.adminService = adminService;
    }
    public ResponseEntity<String> activateAgent(@PathVariable Long agentId) {
        return agentRepository.findById(agentId).map(agent -> {
            agent.setActive(true);
            agentRepository.save(agent);

            Session session = new Session();
            session.setAgent(agent);
            session.setDebut(LocalDateTime.now());
            session.setEtatSession(EtatSession.en_ligne);
            sessionRepository.save(session);

            return ResponseEntity.ok("L'agent " + agent.getNom() + " est maintenant actif.");
        }).orElse(ResponseEntity.badRequest().body("Agent introuvable."));
    }
    @PostMapping("/register")
    public Admin registerAdmin(@RequestBody AdminRegistrationDTO adminRegistrationDTO) {
        return adminService.register(adminRegistrationDTO);
    }

   /* @Autowired
    private AdminService adminService;



    @GetMapping("/admin/dashboard")
    public String dashboard() {
        return "admin/dashboard";  // Vue d'administration après connexion
    }
    @GetMapping("/login")
    public String login() {
        return "login";  // Page de connexion
    }*/


