package ma.est_jpa_ap.services;

import ma.est_jpa_ap.entites.Ticket;
import ma.est_jpa_ap.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    // Créer un nouveau ticket
    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    // Récupérer tous les tickets
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    // Récupérer un ticket par son ID
    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    // Supprimer un ticket par son ID
    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }
}
