package ma.est_jpa_ap.repositories;

import ma.est_jpa_ap.entites.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    Optional<Categorie> findByName(String name);


    //Optional<Object> findByNom(String categorie);
}
