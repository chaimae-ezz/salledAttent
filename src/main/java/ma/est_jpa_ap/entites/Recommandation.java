package ma.est_jpa_ap.entites;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "recommandations")
public class Recommandation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String commentaire;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
}
