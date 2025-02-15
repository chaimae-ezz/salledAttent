package ma.est_jpa_ap.entites;
import jakarta.persistence.*;
import lombok.*;

import java.time.Duration;
import java.util.Date;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Statistique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int nombreTicketsTraites;
    private int totalTicketsEnAttent;
    private Long totalHeuresTravail;
    private Long totalPauseTime;
    @OneToOne
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;

   /* @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;*/



}
