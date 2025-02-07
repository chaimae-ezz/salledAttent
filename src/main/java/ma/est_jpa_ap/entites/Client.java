package ma.est_jpa_ap.entites;

import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;

    @OneToMany(mappedBy = "client")
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "client")
    private List<Recommandation> recommandations;
}
