package ma.est_jpa_ap.repositories;

import ma.est_jpa_ap.entites.Statistique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatistiqueRepository extends JpaRepository<Statistique, Long> {
}
