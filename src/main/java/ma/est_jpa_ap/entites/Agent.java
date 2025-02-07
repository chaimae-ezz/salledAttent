package ma.est_jpa_ap.entites;

import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name = "agents")
public class Agent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    @OneToMany(mappedBy = "agent")
    private List<Ticket> tickets;

    @OneToOne(mappedBy = "agent", cascade = CascadeType.ALL)
    private Statistique statistique;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public Statistique getStatistique() {
        return statistique;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public void setStatistique(Statistique statistique) {
        this.statistique = statistique;
    }
}
