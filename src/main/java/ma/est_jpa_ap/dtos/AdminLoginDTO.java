package ma.est_jpa_ap.dtos;

import lombok.Data;

@Data
public class AdminLoginDTO {
    private String email;
    private String password;
}
