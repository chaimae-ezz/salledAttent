package ma.est_jpa_ap.service;



import ma.est_jpa_ap.entites.Recommandation;
import ma.est_jpa_ap.repositories.RecommandationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommandationService {
    private final RecommandationRepository recommandationRepository;

    public RecommandationService(RecommandationRepository recommandationRepository) {
        this.recommandationRepository = recommandationRepository;
    }

    public Recommandation createRecommandation(Recommandation recommandation) {
        return recommandationRepository.save(recommandation);
    }

    public List<Recommandation> getAllRecommandations() {
        return recommandationRepository.findAll();
    }

    public Recommandation getRecommandationById(Long id) {
        return recommandationRepository.findById(id).orElse(null);
    }

    public void deleteRecommandation(Long id) {
        recommandationRepository.deleteById(id);
    }
}

