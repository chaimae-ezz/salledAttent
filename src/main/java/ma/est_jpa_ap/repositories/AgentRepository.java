package ma.est_jpa_ap.repositories;

import ma.est_jpa_ap.entites.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


    @Repository
    public interface AgentRepository extends JpaRepository<Agent, Long> {
        Agent findByUsername(String username);
    }

