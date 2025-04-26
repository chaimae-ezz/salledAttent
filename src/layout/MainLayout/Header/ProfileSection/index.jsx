import { useEffect, useRef, useState } from 'react';
import axiosInstance from 'api/axiosConfig';
import { useTheme } from '@mui/material/styles';
import {
  Avatar, Card, CardContent, Chip, ClickAwayListener, Divider, Grid, InputAdornment,
  List, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, Paper, Popper,
  Stack, Switch, Typography, Box, Button
} from '@mui/material';
import { IconLogout, IconSearch, IconSettings, IconUser, IconBell } from '@tabler/icons-react';
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import { useNavigate } from 'react-router-dom';

export default function ProfileSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [user, setUser] = useState({ nom: '', prenom: '' });

  useEffect(() => {
    // Remplacer ceci par un appel API au backend pour récupérer le nom/prénom de l'utilisateur
    setUser({ nom: 'Ezzoubaa', prenom: 'Chaimae' });
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Chip
        sx={{ ml: 2, height: '48px', borderRadius: '27px', '& .MuiChip-label': { lineHeight: 0 } }}
        icon={
          <Avatar
            sx={{ cursor: 'pointer' }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
          >
            {user.prenom.charAt(0)}{user.nom.charAt(0)}
          </Avatar>
        }
        label={<IconSettings stroke={1.5} size="24px" />}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper placement="bottom" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Stack>
                        <Typography variant="h4">Bonjour, {user.prenom} {user.nom}</Typography>
                      </Stack>
                      <Divider />
                    </Box>
                    <Box sx={{ p: 2, py: 0 }}>
                      <Card sx={{ bgcolor: 'primary.light', my: 2 }}>
                        <CardContent>
                          <Grid container spacing={3} direction="column">
                            <Grid item>
                              <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                <Grid item>
                                  <Typography variant="h5">Autoriser les notifications</Typography>
                                </Grid>
                                <Grid item>
                                  <Switch checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <List>
                                <ListItemButton onClick={() => navigate('/pages/reset-password')}>
                                  <ListItemIcon><IconSettings stroke={1.5} size="16px" /></ListItemIcon>
                                  <ListItemText primary="Réinitialiser le mot de passe" />
                                </ListItemButton>
                                <ListItemButton onClick={() => navigate('/agent-page')}>
                                  <ListItemIcon><IconUser stroke={1.5} size="16px" /></ListItemIcon>
                                  <ListItemText primary="Profil" />
                                </ListItemButton>
                              </List>
                            </Grid>
                            <Grid item>
                              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Gérer ma session (My TIME)</Typography>
                              <Stack spacing={2} direction="row" justifyContent="center">
                                <Button variant="contained" color="success">Commencer</Button>
                                <Button variant="contained" color="warning">Pause</Button>
                                <Button variant="contained" color="error">Terminer</Button>
                              </Stack>
                              <ListItemButton onClick={() => navigate('/pages/login')}>
                                <ListItemIcon><IconLogout stroke={1.5} size="16px" /></ListItemIcon>
                                <ListItemText primary="Déconnexion" />
                              </ListItemButton>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Box>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}