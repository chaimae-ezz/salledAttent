package ma.est_jpa_ap.service;
import ma.est_jpa_ap.entites.StatusTik;
import ma.est_jpa_ap.entites.Ticket;
import ma.est_jpa_ap.repositories.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Ticket getTicketById(Long id) {
        return ticketRepository.findById(id).orElse(null);
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    public List<Ticket> getTicketsByStatus(String status) {
        return ticketRepository.findByStatus(StatusTik.valueOf(status));
    }
}

