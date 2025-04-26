import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, Stack, Typography } from '@mui/material';
import axiosInstance from 'axios'; // Importation de axiosInstance
import { useNavigate } from 'react-router-dom';

export default function TestPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  const [sessionState, setSessionState] = useState('hors_service');

  // Vérifier si les données utilisateur existent
  if (!userId || !role) {
    return (
      <MainCard title="Erreur">
        <Typography variant="h6">
          Données utilisateur manquantes. Veuillez vous reconnecter.
        </Typography>
      </MainCard>
    );
  }

  // Vérifier si l'utilisateur est un agent
  if (role !== 'AGENT') {
    return (
      <MainCard title="Accès refusé">
        <Typography variant="h6">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
        </Typography>
      </MainCard>
    );
  }

  const handleStart = async () => {
    try {
      const response = await axiosInstance.put(`/api/sessions/start/${userId}`); // Utilisation de axiosInstance
      setSessionState('en_ligne');
      console.log("Session démarrée:", response.data);
    } catch (error) {
      console.error("Erreur lors du démarrage de la session:", error);
      alert("Erreur lors du démarrage de la session. Veuillez réessayer.");
    }
  };

  const handlePause = async () => {
    try {
      const response = await axiosInstance.put(`/api/sessions/pause/${userId}`); // Utilisation de axiosInstance
      setSessionState('en_pausse');
      console.log("Session en pause:", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise en pause de la session:", error);
      alert("Erreur lors de la mise en pause de la session. Veuillez réessayer.");
    }
  };

  const handleResume = async () => {
    try {
      const response = await axiosInstance.put(`/api/sessions/resume/${userId}`); // Utilisation de axiosInstance
      setSessionState('en_ligne');
      console.log("Session reprise:", response.data);
    } catch (error) {
      console.error("Erreur lors de la reprise de la session:", error.response?.data || error.message);
      alert("Erreur lors de la reprise de la session. Veuillez réessayer.");
    }
  };

  const handleOffline = async () => {
    try {
      const response = await axiosInstance.put(`/api/sessions/terminer/${userId}`); // Utilisation de axiosInstance
      setSessionState('hors_service');
      console.log("Session terminée:", response.data);
    } catch (error) {
      console.error("Erreur lors de la mise hors service de la session:", error);
      alert("Erreur lors de la mise hors service de la session. Veuillez réessayer.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    navigate('/login'); // Rediriger vers la page de connexion
  };

  return (
    <MainCard title="Ma Session">
      <Typography variant="h4" gutterBottom>
        Ma Session
      </Typography>
      <Typography variant="body1" gutterBottom>
        État actuel: {sessionState}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStart}
          disabled={sessionState === 'en_ligne'}
        >
          Commencer
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePause}
          disabled={sessionState !== 'en_ligne'}
        >
          Pause
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleResume}
          disabled={sessionState !== 'en_pausse'}
        >
          Reprendre
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleOffline}
          disabled={sessionState === 'hors_service'}
        >
          Hors Service
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleLogout}
        >
          Déconnexion
        </Button>
      </Stack>
    </MainCard>
  );
}
