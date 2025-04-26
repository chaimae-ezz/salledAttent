import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import TicketTraites from './TicketTraites';
import axiosInstance from 'api/axiosConfig';

export default function ListeTicketsTraites() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axiosInstance.get('/tickets/processed') // Mets l'URL de ton API
      .then((response) => {
        // Ajouter une durée calculée pour chaque ticket
        const ticketsWithDuration = response.data.map((ticket) => ({
          ...ticket,
          duree: Math.floor(Math.random() * 30) + 1, // Durée aléatoire entre 1 et 30 minutes (à remplacer par votre logique)
        }));
        setTickets(ticketsWithDuration);
      })
      .catch((error) => console.error('Erreur de chargement des tickets traités:', error));
  }, []);

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
        Tickets Traités
      </Typography>
      {tickets.length > 0 ? (
        <TicketTraites tickets={tickets} />
      ) : (
        <Typography variant="body1" sx={{ color: 'gray' }}>
          Aucun ticket traité pour l’instant.
        </Typography>
      )}
    </div>
  );
}