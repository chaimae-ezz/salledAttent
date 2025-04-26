import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
import axiosInstance from 'api/axiosConfig';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';

export default function TicketAttenteCard() {
  const [pendingTickets, setPendingTickets] = useState(0);

  useEffect(() => {
    axiosInstance.get('/tickets/pending-count-by-agent')
      .then((response) => {
        setPendingTickets(response.data.count);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tickets en attente:', error);
      });
  }, []);

  return (
    <Card sx={{ bgcolor: 'error.light', color: '#fff', boxShadow: 3, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column">
          <Grid>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: 'error.main',
                    mt: 1,
                    width: 50,
                    height: 50,
                  }}
                >
                  <img src={EarningIcon} alt="Tickets en attente" style={{ width: 24, height: 24 }} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
              Tickets en attente
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
              {pendingTickets}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
