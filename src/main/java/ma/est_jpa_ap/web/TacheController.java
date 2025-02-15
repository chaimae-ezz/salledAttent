package ma.est_jpa_ap.web;


import ma.est_jpa_ap.entites.Tache;
import ma.est_jpa_ap.services.TacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/taches")
public class TacheController {
    @Autowired
    private TacheService tacheService;
    @PostMapping
    public ResponseEntity<Tache> addTache(@RequestParam String nom) {
        Tache tache = tacheService.addTache(nom);
        return new ResponseEntity<>(tache, HttpStatus.CREATED);
    }
    // Modifier une tâche existante
    @PutMapping("/{id}")
    public ResponseEntity<Tache> updateTache(@PathVariable Long id, @RequestParam String nom) {
        Tache tache = tacheService.updateTache(id, nom);
        return new ResponseEntity<>(tache, HttpStatus.OK);
    }
    // Supprimer une tâche
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTache(@PathVariable Long id) {
        tacheService.deleteTache(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    // Récupérer toutes les tâches
    @GetMapping
    public ResponseEntity<List<Tache>> getAllTaches() {
        List<Tache> taches = tacheService.getAllTaches();
        return new ResponseEntity<>(taches, HttpStatus.OK);
    }
    // Récupérer une tâche par ID
    @GetMapping("/{id}")
    public ResponseEntity<Tache> getTacheById(@PathVariable Long id) {
        Optional<Tache> tache = tacheService.getTacheById(id);
        return tache.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


}
