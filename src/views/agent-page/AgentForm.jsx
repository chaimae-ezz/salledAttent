import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, FormControl, Grid, InputLabel, OutlinedInput, Select, MenuItem, TextField, Typography, Box } from '@mui/material';
import axiosInstance from 'api/axiosConfig';

export default function AgentForm() {
  const theme = useTheme();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  //const [email, setEmail] = useState("");
  //const [motDePasse, setMotDePasse] = useState("");
  const [categorie, setCategorie] = useState("");
  const [service, setService] = useState("");
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [agentId, setAgentId] = useState(null); // Pour stocker l'ID de l'agent ajouté

  const [showAffecterSession, setShowAffecterSession] = useState(false); // Pour afficher le bouton
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Récupérer l'ID de l'administrateur depuis le localStorage
    const adminId = localStorage.getItem('adminId');
    if (!adminId) {
      alert("Erreur : ID admin non trouvé !");
      return;
    }
    const agent = {
      nom,
      prenom,
      //email,
      //motDePasse,
      categorieId: categorie,
      serviceId: service,
    };

    try {
      const response = await axiosInstance.post(`/api/admins/${adminId}/ajouter-agent`, agent);
      console.log('Agent ajouté avec succès:', response.data);
      alert('Agent ajouté avec succès !');
      setAgentId(response.data.id);
      // Afficher le bouton "Affecter une session"
      setShowAffecterSession(true);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Échec de l’ajout de l’agent');
    }
  };

  const handleCategorieChange = (event) => {
    const selectedCategorieId = event.target.value;
    setCategorie(selectedCategorieId);
    setService("");


    axiosInstance.get(`/api/taches/parCategorie/${selectedCategorieId}`)
      .then(response => {
        setServices(response.data || []);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setServices([]); // Réinitialisation en cas d'erreur
      });
  };

  //
  useEffect(() => {
    axiosInstance.get('/api/categories/filtered')
      .then(response => {
        setCategories(response.data || []);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }, []); //  [] pour ne charger qu'une seule fois au montage du composant
  const handleAffecterSession = async () => {
    if (!agentId) {
      alert("Erreur : ID agent non trouvé !");
      return;
    }

    try {
      const response = await axiosInstance.post(`/api/sessions/creer/${agentId}`);
      console.log('Session affectée avec succès:', response.data);
      alert('Session affectée avec succès !');

      // Réinitialiser les champs du formulaire
      setNom("");
      setPrenom("");
      setCategorie("");
      setService("");
      setAgentId(null);
      setShowAffecterSession(false); // Masquer le bouton
    } catch (error) {
      console.error('Erreur:', error);
      alert('Échec de l’affectation de la session');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Nom" margin="normal" type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Prénom" margin="normal" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Catégorie</InputLabel>
            <Select value={categorie || ""} onChange={handleCategorieChange}>
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>{cat.nom}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Service</InputLabel>
            <Select value={service || ""} onChange={(e) => setService(e.target.value)} disabled={!categorie}>
              {services.map((serv) => (
                <MenuItem key={serv.id} value={serv.id}>{serv.nom}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">Enregistrer</Button>
      </Box>
      {showAffecterSession && (
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleAffecterSession} variant="contained" color="secondary">
            Affecter une session
          </Button>
        </Box>
      )}
    </form>
  );
}
