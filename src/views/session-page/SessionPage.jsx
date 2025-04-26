import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import TotalTicketCard from 'views/session-page/TotalTicketCard';
import TicketTraite from 'views/session-page/TicketTraite';
import TicketAttente from 'views/session-page/TicketAttente';
import ListeTicketTraites from 'ui-component/ticket/ListeTicketsTraites';
import axiosInstance from 'axios';
import MainCard from 'ui-component/cards/MainCard';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

export default function SessionPage() {
  const [ticketsTraites, setTicketsTraites] = useState([]);
  const [ticketsEnAttente, setTicketsEnAttente] = useState([]);
  const [ticketEnCours, setTicketEnCours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tacheId, setTacheId] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('authToken');

  const isUserValid = userId && role && token;
  const isUserAgent = role === 'AGENT';


  useEffect(() => {
    if (!isUserValid || !isUserAgent) return;

    const socket = new SockJS('http://localhost:8082/ws');
    const client = over(socket);

    client.connect({ 'Authorization': `Bearer ${token}` }, () => {
      setStompClient(client);
      client.subscribe(`/topic/tickets/${userId}`, (message) => {
        const newTicket = JSON.parse(message.body);
        console.log('Nouveau ticket reçu:', newTicket);
        setTicketsEnAttente((prevTickets) => [...prevTickets, newTicket]);
        alert(`Nouveau ticket reçu: ${newTicket.id}`);
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [isUserValid, isUserAgent, userId, token]);

  // Fetch tacheId
  useEffect(() => {
    if (!isUserValid || !isUserAgent) return;

    setIsLoading(true);
    axiosInstance.get(`/api/tickets/tache/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(response => {
        setTacheId(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de la tacheId', error);
        setError('Erreur lors de la récupération de la tacheId');
      })
      .finally(() => setIsLoading(false));
  }, [userId, isUserValid, isUserAgent, token]);

  // Fetch tickets
  useEffect(() => {
    if (!isUserValid || !isUserAgent || !tacheId) return;

    setIsLoading(true);
    Promise.all([
      axiosInstance.get(`/api/tickets/traites/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }),
      axiosInstance.get(`/api/tickets/en-attente/${tacheId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }),
      axiosInstance.get(`/api/tickets/en-cours/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
    ])
      .then(([traitesRes, attenteRes, enCoursRes]) => {
        setTicketsTraites(traitesRes.data);
        setTicketsEnAttente(attenteRes.data);
        setTicketEnCours(enCoursRes.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données', error);
        setError('Erreur lors de la récupération des tickets');
      })
      .finally(() => setIsLoading(false));
  }, [userId, tacheId, isUserValid, isUserAgent, token]);

  const handleNextTicket = async () => {
    if (!ticketEnCours) return;

    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        `/api/tickets/terminer-et-suivant/${ticketEnCours.id}?agentId=${userId}`,
        {},
        { headers: { 'Authorization': `Bearer ${token}` } }
      );
      setTicketEnCours(response.data);
    } catch (error) {
      console.error('Erreur lors du passage au ticket suivant', error);
      setError('Erreur lors du passage au ticket suivant');
    } finally {
      setIsLoading(false);
    }
  };

  // Early return for invalid user or role
  if (!isUserValid) {
    return (
      <MainCard title="Erreur">
        <Typography variant="h6">
          Données utilisateur manquantes. Veuillez vous reconnecter.
        </Typography>
      </MainCard>
    );
  }

  if (!isUserAgent) {
    return (
      <MainCard title="Accès refusé">
        <Typography variant="h6">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
        </Typography>
      </MainCard>
    );
  }

  if (error) {
    return (
      <MainCard title="Erreur">
        <Typography variant="h6">
          {error}
        </Typography>
      </MainCard>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={4}>
          <TotalTicketCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TicketTraite isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TicketAttente isLoading={isLoading} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5">
          Ticket en cours de traitement : {ticketEnCours ? `#${ticketEnCours.id}` : 'Aucun'}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleNextTicket} disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : 'Suivant'}
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Liste des tickets traités
        </Typography>
        <Box sx={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '4px', p: 2 }}>
          <ListeTicketTraites tickets={ticketsTraites} />
        </Box>
      </Box>
    </Box>
  );
}