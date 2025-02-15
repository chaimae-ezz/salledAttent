package ma.est_jpa_ap.repositories;

import jakarta.transaction.Transactional;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.entites.Tache;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

public interface TacheRepository extends JpaRepository<Tache, Long> {

    Optional<Tache> findByNom(String nom);


}
