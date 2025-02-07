package ma.est_jpa_ap.entites;
import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    private String service;
    @Enumerated(EnumType.STRING)
    private  StatusTik status;

    private String dateHeure;
}
