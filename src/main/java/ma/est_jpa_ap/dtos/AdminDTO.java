package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class AdminDTO {
    private String nom;
    private String prenom;

    private String email;

    // Liste des IDs des agents sous sa responsabilité
    private List<Long> agentsIds = new ArrayList<>();
}
