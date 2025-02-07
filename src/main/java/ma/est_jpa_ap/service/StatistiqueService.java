package ma.est_jpa_ap.service;



import ma.est_jpa_ap.entites.Statistique;
import ma.est_jpa_ap.repositories.StatistiqueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatistiqueService {
    private final StatistiqueRepository statistiqueRepository;

    public StatistiqueService(StatistiqueRepository statistiqueRepository) {
        this.statistiqueRepository = statistiqueRepository;
    }

    public Statistique createStatistique(Statistique statistique) {
        return statistiqueRepository.save(statistique);
    }

    public List<Statistique> getAllStatistiques() {
        return statistiqueRepository.findAll();
    }

    public Statistique getStatistiqueById(Long id) {
        return statistiqueRepository.findById(id).orElse(null);
    }

    public void deleteStatistique(Long id) {
        statistiqueRepository.deleteById(id);
    }
}

