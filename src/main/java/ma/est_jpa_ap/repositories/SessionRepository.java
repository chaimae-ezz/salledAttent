package ma.est_jpa_ap.repositories;

import ma.est_jpa_ap.entites.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionRepository extends JpaRepository<Session,Long> {
}
