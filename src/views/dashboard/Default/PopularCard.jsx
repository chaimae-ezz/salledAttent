import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const AgentActifCard = () => {
  const [agentActif, setAgentActif] = useState({});
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/agents')
      .then(response => {
        setAgents(response.data);
        setAgentActif(response.data.find(agent => agent.etatSession === 'actif'));
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Agent Actif</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Nom : {agentActif.nom}</Typography>
            <Typography variant="body1">Prénom : {agentActif.prenom}</Typography>
            <Typography variant="body1">État de session : {agentActif.etatSession}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Liste des Agents</Typography>
            <ul>
              {agents.map(agent => (
                <li key={agent.id}>
                  <Typography variant="body1">Nom : {agent.nom}</Typography>
                  <Typography variant="body1">Prénom : {agent.prenom}</Typography>
                  <Typography variant="body1">État de session : {agent.etatSession}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </CardContent>
      {isLoading && (
        <Button variant="contained" color="primary" disabled>
          Chargement...
        </Button>
      )}
    </Card>
  );
};

export default AgentActifCard;