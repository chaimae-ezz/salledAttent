package ma.est_jpa_ap.dtos;
import lombok.Data;

@Data
public class AgentRegistrationDTO {
    private String nom;
    private String prenom;
    private String email;
    private String password;
}
