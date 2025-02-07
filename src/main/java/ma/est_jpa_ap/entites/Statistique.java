package ma.est_jpa_ap.entites;
import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name = "statistiques")
public class Statistique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int nombreTicketsTraites;
    private double tempsMoyen;

    @OneToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;
}
