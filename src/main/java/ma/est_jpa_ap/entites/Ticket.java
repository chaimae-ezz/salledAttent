package ma.est_jpa_ap.entites;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "tickets")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long numTicket;
    private LocalDateTime createdAt;
    //private LocalDateTime processedAt;
    private LocalDateTime completedAt;
    @Enumerated(EnumType.STRING)
    private StatusTik status;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Tache tache;
}
    /*@ManyToOne
    @JoinColumn(name = "session_id")
    private Session session;*/




