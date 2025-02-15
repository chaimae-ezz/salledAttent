package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.util.List;

@Data
public class AgentDTO {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String categorie;  // Nom de la catégorie (facultatif)
    private Long categorieID;  // ID de la catégorie (prioritaire)
    private String tache;  // Nom de la tâche (facultatif)
    private Long tacheID;
}
