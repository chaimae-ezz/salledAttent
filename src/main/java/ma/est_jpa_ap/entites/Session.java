package ma.est_jpa_ap.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private LocalDateTime debut;
    private LocalDateTime fin;
    private LocalDateTime pausse;
    private Date jour;
    @Enumerated(EnumType.STRING)
    private EtatSession etatSession;
    @OneToOne
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private Tache tache;
}

