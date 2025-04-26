import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// axios instance
import axiosInstance from 'api/axiosConfig';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function PendingTicketsCard({ isLoading }) {
  const theme = useTheme();
  const [pendingCount, setPendingCount] = useState(0); // Valeur initiale à 0

  useEffect(() => {
    const fetchPendingTickets = async () => {
      try {
        const response = await axiosInstance.get('/tickets/pending-count'); // Remplace par ton endpoint
        setPendingCount(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des tickets en attente:', error);
      }
    };

    fetchPendingTickets();
    const interval = setInterval(fetchPendingTickets, 5000); // Rafraîchir toutes les 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'warning.light', // Couleur jaune pour les tickets en attente
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.warning[800],
              borderRadius: '50%',
              top: { xs: -85 },
              right: { xs: -95 },
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.warning[800],
              borderRadius: '50%',
              top: { xs: -125 },
              right: { xs: -15 },
              opacity: 0.5,
            },
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid>
                <Grid container sx={{ justifyContent: 'space-between' }}>
                  <Grid>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        bgcolor: 'warning.main',
                        mt: 1,
                      }}
                    >
                      <CardMedia sx={{ width: 24, height: 24 }} component="img" src={EarningIcon} alt="Notification" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: '2.125rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75,
                        color: theme.palette.warning.dark, // Changer en orange foncé
                      }}
                    >
                      {pendingCount || 0}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        bgcolor: 'warning.dark', // Changer la couleur du petit cercle en orange foncé
                        color: 'white', // Contraster la couleur de la flèche
                      }}
                    >
                      <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ mb: 1.25 }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: theme.palette.warning.dark }}>
                  Tickets en attente
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
}

PendingTicketsCard.propTypes = {
  isLoading: PropTypes.bool,
};
