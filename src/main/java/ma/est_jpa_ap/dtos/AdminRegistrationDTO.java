package ma.est_jpa_ap.dtos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter @Setter
public class AdminRegistrationDTO {
    private String nom;
    private String prenom;
    private String email;
    private String password;
}

