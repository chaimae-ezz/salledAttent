package ma.est_jpa_ap.repositories;




        import ma.est_jpa_ap.entites.StatusTik;
        import ma.est_jpa_ap.entites.Ticket;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;

        import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByStatus(StatusTik status);
}
