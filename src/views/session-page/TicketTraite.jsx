import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
import axiosInstance from 'api/axiosConfig';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';

export default function TicketTraiteCard() {
  const [processedTickets, setProcessedTickets] = useState(0);

  useEffect(() => {
    axiosInstance.get('/tickets/processed-count-by-agent')
      .then((response) => {
        setProcessedTickets(response.data.count);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tickets traités:', error);
      });
  }, []);

  return (
    <Card sx={{ bgcolor: 'success.light', color: '#fff', boxShadow: 3, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column">
          <Grid>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: 'success.main',
                    mt: 1,
                    width: 50,
                    height: 50,
                  }}
                >
                  <img src={EarningIcon} alt="Tickets Traités" style={{ width: 24, height: 24 }} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
              Tickets Traités
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
              {processedTickets}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
