package ma.est_jpa_ap.config;

//import ma.est_jpa_ap.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration

public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // Utilisation de BCrypt pour encoder les mots de passe
    }

}
 /*
    private  final  AdminService adminService;

    public SecurityConfig( AdminService adminService) {
        this.adminService = adminService;
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Désactiver CSRF si vous utilisez une API REST
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/login", "/logout").permitAll() // Autoriser la page de login et logout sans authentification
                        .requestMatchers("/admin/**").hasRole("ADMIN")//.hasRole("ADMIN")  ("/taches/**") // Protéger l'accès à /admin/*
                        .anyRequest().authenticated()  // Toute autre requête nécessite une authentification
                )
                .formLogin(login -> login
                        .loginPage("/login")  // Page de connexion personnalisée
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .permitAll()
                );

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return adminService;  // AdminService implémente UserDetailsService
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();

    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
*/