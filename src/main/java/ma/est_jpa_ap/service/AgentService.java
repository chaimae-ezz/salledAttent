package ma.est_jpa_ap.service;
import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.repositories.AgentRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgentService {
    private final AgentRepository agentRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AgentService(AgentRepository agentRepository, BCryptPasswordEncoder passwordEncoder) {
        this.agentRepository = agentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Agent createAgent(Agent agent) {
        agent.setPassword(passwordEncoder.encode(agent.getPassword()));
        return agentRepository.save(agent);
    }

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Agent getAgentById(Long id) {
        return agentRepository.findById(id).orElse(null);
    }

    public void deleteAgent(Long id) {
        agentRepository.deleteById(id);
    }
}

