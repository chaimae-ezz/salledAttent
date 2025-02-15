package ma.est_jpa_ap.repositories;

import jakarta.transaction.Transactional;
import ma.est_jpa_ap.entites.Admin;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.entites.EtatSession;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository  extends JpaRepository<Admin, Long>{
    Optional<Admin> findById(Long id);
    Optional<Admin> findByNom(String nom);
    Optional<Admin> findByPrenom(String prenom);
    Optional<Admin> findByEmail(String email);
    //les modification sur les Agents
    // Ajouter un agent
    /*
    @Transactional
    @Modifying
    @Query("INSERT INTO Agent (nom, prenom, email, password, admin) VALUES (:nom, :prenom, :email, :password, :admin)")
    void addAgent(@Param("nom") String nom, @Param("prenom") String prenom, @Param("email") String email, @Param("password") String password, @Param("admin") Admin admin);

    // Supprimer un agent
    @Transactional
    @Modifying
    @Query("DELETE FROM Agent a WHERE a.id = :id")
    void deleteAgent(@Param("id") Long id);
    // Changer l'état de session d'un agent
    @Transactional
    @Modifying
    @Query("UPDATE Agent a SET a.etatSession = :etatSession WHERE a.id = :id")
    void updateEtatSessionAgent(@Param("id") Long id, @Param("etatSession") EtatSession etatSession);
    */

}
