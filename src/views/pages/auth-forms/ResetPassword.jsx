import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Box, Typography, IconButton, Alert, Grid } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axiosInstance from 'api/axiosConfig';

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitResetPassword = async (event) => {
    event.preventDefault();
    setResetError('');
    setResetSuccess('');

    if (newPassword !== confirmPassword) {
      setResetError(' Les mots de passe doivent être identiques.');
      setNewPassword('');
      setConfirmPassword('');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/auth/reset-password', { email, password: newPassword });
      if (response.status === 200) {
        navigate('/pages/login', {
          state: { successMessage: '✅ Votre mot de passe a été mis à jour avec succès.' }
        });
      }
    } catch (error) {
      setResetError(' Erreur lors de la mise à jour du mot de passe. Veuillez réessayer.');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e3f2fd', // Bleu clair pour le fond de la page
        minHeight: '100vh', // Remplir toute la hauteur de la page
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          padding: 3,
          backgroundColor: 'white', // Fond blanc pour le formulaire
          borderRadius: '8px', // Arrondi des coins
          boxShadow: 3, // Ombre pour l'encadrement
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmitResetPassword}>
          <Typography
            variant="h4"
            color="secondary"
            sx={{ textAlign: 'center', mb: 2 }}
          >
            Réinitialisation du mot de passe
          </Typography>

          {resetError && <Alert severity="error">{resetError}</Alert>}
          {resetSuccess && <Alert severity="success">{resetSuccess}</Alert>}

          {/* Champ E-mail pré-rempli */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ top: '-7px' }}>Email</InputLabel>
            <OutlinedInput
              type="email"
              value={email}
              disabled
              readOnly
            />
          </FormControl>

          {/* Champ Nouveau Mot de Passe */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ top: '-7px' }}>Nouveau mot de passe</InputLabel>
            <OutlinedInput
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handleChangeNewPassword}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* Champ Confirmer le Mot de Passe */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ top: '-7px' }}>Confirmer le mot de passe</InputLabel>
            <OutlinedInput
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Grid container sx={{ justifyContent: 'center', mt: 2 }}>
            <AnimateButton>
              <Button color="secondary" fullWidth size="large" type="submit" variant="contained">
                Modifier
              </Button>
            </AnimateButton>
          </Grid>

          {/* Lien vers la page de connexion */}
          <Typography
            variant="subtitle1"
            color="secondary"
            sx={{ cursor: 'pointer', textDecoration: 'underline', textAlign: 'center', mt: 2 }}
            onClick={() => navigate('/pages/login')}
          >
            Retour à la connexion
          </Typography>
        </form>
      </Box>
    </Box>
  );
}
