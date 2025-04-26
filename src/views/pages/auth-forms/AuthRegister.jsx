import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput,
  TextField, Typography, Box, IconButton, FormControlLabel, Checkbox
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axiosInstance from 'api/axiosConfig';

export default function AuthRegister() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });

  // Fonction pour gérer le changement des champs du formulaire
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/register', formData);
      console.log('Inscription réussie:', response.data);
      alert('Inscription réussie !');

      // Redirection vers la page de connexion avec l'email pré-rempli
      navigate('/pages/login', { state: { email: formData.email } });

    } catch (error) {
      console.error('Erreur:', error);
      alert('Échec de l’inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} size={12}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Inscrivez-vous avec votre adresse e-mail</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 0, sm: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Prénom" margin="normal" name="prenom" type="text" value={formData.prenom} onChange={handleChange} sx={{ ...theme.typography.customInput }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nom" margin="normal" name="nom" type="text" value={formData.nom} onChange={handleChange} sx={{ ...theme.typography.customInput }} />
        </Grid>
      </Grid>

      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="outlined-adornment-email-register">Adresse e-mail</InputLabel>
        <OutlinedInput id="outlined-adornment-email-register" type="email" name="email" value={formData.email} onChange={handleChange} inputProps={{}} />
      </FormControl>

      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="outlined-adornment-password-register">Mot de passe</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password-register"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="large">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />}
            label={<Typography variant="subtitle1"> Acceptez les <Typography variant="subtitle1" component={Link} to="#"> conditions générales. </Typography> </Typography>}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary"> S'inscrire </Button>
        </AnimateButton>
      </Box>
    </form>
  );
}