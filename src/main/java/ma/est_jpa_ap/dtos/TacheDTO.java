package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.util.List;

@Data
public class TacheDTO {
    private Long id;
    private String nom;

    // Nom de la catégorie associée
    private String categorie;

    // Liste des IDs des agents assignés à cette tâche
    private List<Long> agentsIds;
}
