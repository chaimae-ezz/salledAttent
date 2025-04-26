import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, InputLabel, OutlinedInput, Box, Typography, Alert } from '@mui/material';

export default function AuthLogin() {
  console.log('le composant auth est rendu !');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const payload = { email, password };

    try {
      const response = await fetch('http://localhost:8082/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json(); // Désérialiser la réponse en JSON
        console.log("Réponse reçue :", data);
        const token = data.token; // Récupérer le token JWT
        const userId = data.userId; // Récupérer l'ID de l'utilisateur
        const role = data.role; // Récupérer le rôle

        // Stocker les informations dans le localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);

        // Rediriger en fonction du rôle
        if (role === 'ADMIN') {
          navigate('/dashboard/Default');
        } else if (role === 'AGENT') {
          navigate('/session-page');
        }
      } else {
        setErrorMessage('Identifiants incorrects.');
      }
    } catch (error) {
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };
  return (
    <Box sx={{ maxWidth: 380, margin: '0 auto', padding: 3 }}>
      <form onSubmit={handleSubmitLogin}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Connexion
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={{ top: '-7px' }}>Email</InputLabel>
          <OutlinedInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ padding: '12px', fontSize: '16px', height: '45px' }}
          />
        </FormControl>


        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={{ top: '-7px' }}>Mot de passe</InputLabel>
          <OutlinedInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ padding: '12px', fontSize: '16px', height: '45px' }}
          />
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button color="secondary" fullWidth size="large" type="submit" variant="contained">
            Se connecter
          </Button>
        </Box>
      </form>
    </Box>
  );
} //loursque un admin conecter il va vers http://localhost:3001/dashboard/admin au lieu de http://localhost:3001/dashboard/default