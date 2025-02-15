package ma.est_jpa_ap.dtos;

import lombok.Data;

import java.util.List;

@Data
public class CategorieDTO {
    private Long id;
    private String name;

    // Liste des noms des tâches associées
    private List<String> taches;
}
