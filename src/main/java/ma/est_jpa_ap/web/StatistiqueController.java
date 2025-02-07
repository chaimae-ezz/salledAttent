package ma.est_jpa_ap.web;


import ma.est_jpa_ap.entites.Statistique;
import ma.est_jpa_ap.service.StatistiqueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/statistiques")
public class StatistiqueController {
    private final StatistiqueService statistiqueService;

    public StatistiqueController(StatistiqueService statistiqueService) {
        this.statistiqueService = statistiqueService;
    }

    @PostMapping
    public Statistique createStatistique(@RequestBody Statistique statistique) {
        return statistiqueService.createStatistique(statistique);
    }

    @GetMapping
    public List<Statistique> getAllStatistiques() {
        return statistiqueService.getAllStatistiques();
    }

    @GetMapping("/{id}")
    public Statistique getStatistiqueById(@PathVariable Long id) {
        return statistiqueService.getStatistiqueById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteStatistique(@PathVariable Long id) {
        statistiqueService.deleteStatistique(id);
    }
}

