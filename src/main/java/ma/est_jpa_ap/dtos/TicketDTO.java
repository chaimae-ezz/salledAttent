package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TicketDTO {
    private Long id;
    private long numTicket;
    private LocalDateTime createdAt;
    private LocalDateTime processedAt;
    private LocalDateTime completedAt;
    private String status;

    // Nom du service associé
    private String service;

    // ID de la session en cours
    private Long sessionId;
}
