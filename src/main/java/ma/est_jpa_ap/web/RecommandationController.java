package ma.est_jpa_ap.web;



import ma.est_jpa_ap.entites.Recommandation;
import ma.est_jpa_ap.service.RecommandationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommandations")
public class RecommandationController {
    private final RecommandationService recommandationService;

    public RecommandationController(RecommandationService recommandationService) {
        this.recommandationService = recommandationService;
    }

    @PostMapping
    public Recommandation createRecommandation(@RequestBody Recommandation recommandation) {
        return recommandationService.createRecommandation(recommandation);
    }

    @GetMapping
    public List<Recommandation> getAllRecommandations() {
        return recommandationService.getAllRecommandations();
    }

    @GetMapping("/{id}")
    public Recommandation getRecommandationById(@PathVariable Long id) {
        return recommandationService.getRecommandationById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRecommandation(@PathVariable Long id) {
        recommandationService.deleteRecommandation(id);
    }
}

