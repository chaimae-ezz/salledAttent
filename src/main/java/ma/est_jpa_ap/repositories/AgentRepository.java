package ma.est_jpa_ap.repositories;

import jakarta.transaction.Transactional;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.entites.EtatSession;
import ma.est_jpa_ap.entites.StatusTik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {
    //@Override
    Optional<Agent> findById(Long id);
    Optional<Agent> findByNom(String nom);
    Optional<Agent> findByPrenom(String prenom);
    Optional<Agent> findByEmail(String email);
    /*//Changer l'état de session d'un agent
    @Transactional
    @Modifying
    @Query("UPDATE Agent a SET a.session.etatSession = :etatSession WHERE a.id = :id")
    void updateEtatSessionAgent(@Param("id") Long id, @Param("etatSession") EtatSession etatSession);

    // Récupérer les statistiques de tickets pour une session
    @Query("SELECT COUNT(t) FROM Ticket t WHERE t.session.id = :sessionId AND t.status = :status")
    int countTicketsBySessionIdAndStatus(@Param("sessionId") Long sessionId, @Param("status") StatusTik status);

    // Récupérer le nombre de tickets traités pour une session
    @Query("SELECT COUNT(t) FROM Ticket t WHERE t.session.id = :sessionId AND t.status = StatusTicket.TRAITE")
    int countTicketsTraitesBySessionId(@Param("sessionId") Long sessionId);

    // Récupérer le nombre de tickets en attente pour une session
    @Query("SELECT COUNT(t) FROM Ticket t WHERE t.session.id = :sessionId AND t.status = StatusTicket.EN_ATTENTE")
    int countTicketsEnAttenteBySessionId(@Param("sessionId") Long sessionId);
 */

}



