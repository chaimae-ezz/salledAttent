package ma.est_jpa_ap.web;

import ma.est_jpa_ap.dtos.AdminRegistrationDTO;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.repositories.AgentRepository;
import ma.est_jpa_ap.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Permettre l'accès depuis l'application React
public class AuthController {

    private final AdminService adminService;

    @Autowired
    public AuthController(AdminService adminService) {
        this.adminService = adminService;
    }

    // Point d'entrée pour l'inscription
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AdminRegistrationDTO adminDTO) {
        try {
            Admin admin = adminService.register(adminDTO);
            return ResponseEntity.ok("Admin inscrit avec succès !");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}

