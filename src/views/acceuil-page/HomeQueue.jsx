import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid, Card, Button } from '@mui/material';
import axios from 'axios';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

export default function QueueHome() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [taches, setTaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stompClient, setStompClient] = useState(null);

  // Connexion WebSocket
  useEffect(() => {
    const socket = new SockJS('http://localhost:8082/ws');
    const client = over(socket);

    client.connect({}, () => {
      setStompClient(client);
      client.subscribe('/topic/tickets', (message) => {
        const ticket = JSON.parse(message.body);
        console.log('Nouveau ticket reçu:', ticket);
        alert(`Nouveau ticket créé : ${ticket.id}`);
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  // Récupérer toutes les catégories au chargement du composant
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8082/api/categories/all')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
        setLoading(false);
      });
  }, []);

  // Récupérer les tâches d'une catégorie sélectionnée
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      axios.get(`http://localhost:8082/api/categories/taches/parCategorie/${selectedCategory}`)
        .then(response => {
          setTaches(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des tâches:', error);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  const handleCategoryClick = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleTicketRequest = useCallback(async (tacheId) => {
    console.log("Tentative de création de ticket pour la tâche ID:", tacheId);
    try {
      const response = await axios.post(`http://localhost:8082/api/tickets/creer-pdf`, null, {
        params: { tacheId },
        responseType: 'blob'
      });

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ticket.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
        alert('Ticket généré et téléchargé avec succès !');
      } else {
        throw new Error('Erreur lors de la création du ticket');
      }
    } catch (error) {
      console.error('Erreur lors de la création du ticket:', error);
      alert('Erreur lors de la création du ticket');
    }
  }, []);
  if (loading) {
    return <Typography>Chargement en cours...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        Sélectionnez un service
      </Typography>

      {/* Affichage des catégories sous forme de boutons carrés */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {categories.map((categorie) => (
          <Grid item xs={12} sm={6} md={4} key={categorie.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
                cursor: 'pointer',
                bgcolor: selectedCategory === categorie.id ? theme.palette.primary.light : theme.palette.background.default,
                '&:hover': {
                  bgcolor: theme.palette.primary.light,
                },
              }}
              onClick={() => handleCategoryClick(categorie.id)}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                {categorie.nom}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {categorie.taches ? categorie.taches.length : 0} tâches
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Affichage de la liste des tâches si une catégorie est sélectionnée */}
      {selectedCategory && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Tâches de {categories.find((c) => c.id === selectedCategory)?.nom}
          </Typography>

          {/* Affichage des tâches pour la catégorie sélectionnée */}
          {taches.map((tache) => (
            <Card key={tache.id} sx={{ mb: 2, p: 2, boxShadow: 2 }}>
              <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {tache.nom}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleTicketRequest(tache.id)}
                  >
                    Prendre un ticket
                  </Button>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}