package ma.est_jpa_ap.entites;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "agent")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter@Setter
public class Agent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;

    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private boolean isActive = false;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    @OneToOne(mappedBy = "agent",cascade = CascadeType.ALL)
    private Session session;

    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Tache tache;

}
