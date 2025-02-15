package ma.est_jpa_ap.dtos;

import lombok.Data;

@Data
public class StatistiqueDTO {
    private Long id;
    private int nombreTicketsTraites;
    private int totalTicketsEnAttente;
    private Long totalHeuresTravail;
    private Long totalPauseTime;

    // ID de l'agent concerné
    private Long agentId;
}