package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
public class SessionDTO {
    private Long id;
    private LocalDateTime debut;
    private LocalDateTime fin;
    private LocalDateTime pause;
    private Date jour;
    private String etatSession;

    // ID de l'agent connecté
    private Long agentId;

    // Liste des tickets de la session (juste les numéros)
    private List<Long> tickets;
}
