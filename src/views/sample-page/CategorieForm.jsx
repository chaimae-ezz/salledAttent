import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, FormControl, Grid, InputLabel, OutlinedInput, TextField, Typography, Box, IconButton } from '@mui/material';
import axiosInstance from 'api/axiosConfig';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CategorieForm() {
  const theme = useTheme();
  const [nomCategorie, setNomCategorie] = useState("");
  const [services, setServices] = useState([{ value: "" }]);

  const handleAddService = () => {
    setServices([...services, { value: "" }]);
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...services];
    newServices[index].value = value;
    setServices(newServices);
  };

  const handleDeleteService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const categorie = {
      nom: nomCategorie,
      nomsTaches: services.map((service) => service.value), // Transformation correcte
    };

    try {
      const response = await axiosInstance.post('/api/categories/ajouter', categorie);
      console.log('Catégorie ajoutée avec succès:', response.data);
      alert('Catégorie ajoutée avec succès !');
      setNomCategorie("");
      setServices([{ value: "" }]);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Échec de l’ajout de la catégorie');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={{ xs: 0, sm: 2 }}>
        <Grid item xs={12}>
          <TextField fullWidth label="Nom de la catégorie" margin="normal" name="nomCategorie" type="text" value={nomCategorie} onChange={(e) => setNomCategorie(e.target.value)} sx={{ ...theme.typography.customInput }} />
        </Grid>
      </Grid>
      {services.map((service, index) => (
        <Grid container spacing={{ xs: 0, sm: 2 }} key={index}>
          <Grid item xs={10}>
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor={`outlined-adornment-service-${index}`}>Ajouter un service</InputLabel>
              <OutlinedInput id={`outlined-adornment-service-${index}`} type="text" value={service.value} onChange={(e) => handleServiceChange(index, e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: 'right' }}>
            <IconButton onClick={() => handleDeleteService(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={{ xs: 0, sm: 2 }}>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button variant="contained" onClick={handleAddService}>Ajouter un service</Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">Enregistrer</Button>
      </Box>
    </form>
  );
}