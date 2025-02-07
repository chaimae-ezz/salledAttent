package ma.est_jpa_ap.web;


import ma.est_jpa_ap.entites.Agent;
import ma.est_jpa_ap.service.AgentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
public class AgentController {
    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }

    @PostMapping
    public Agent createAgent(@RequestBody Agent agent) {
        return agentService.createAgent(agent);
    }

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @GetMapping("/{id}")
    public Agent getAgentById(@PathVariable Long id) {
        return agentService.getAgentById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAgent(@PathVariable Long id) {
        agentService.deleteAgent(id);
    }
}

