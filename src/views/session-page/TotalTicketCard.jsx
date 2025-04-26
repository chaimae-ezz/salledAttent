import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid, CircularProgress } from '@mui/material';
import axiosInstance from 'api/axiosConfig';
import EarningIcon from 'assets/images/icons/earning.svg';

export default function TotalTicketsCard({ isLoading }) {
  const [totalTickets, setTotalTickets] = useState(0);
  const [loading, setLoading] = useState(true); // État de chargement interne

  useEffect(() => {
    axiosInstance.get('/tickets/total')
      .then((response) => {
        setTotalTickets(response.data.count); // Assurez-vous que la réponse contient `count`
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tickets:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Card sx={{ bgcolor: 'primary.light', color: '#fff', boxShadow: 3, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ p: 2.25 }}>
        <Grid container direction="column">
          <Grid>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: 'primary.main',
                    mt: 1,
                    width: 50,
                    height: 50,
                  }}
                >
                  <img src={EarningIcon} alt="Total Tickets" style={{ width: 24, height: 24 }} />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
              Total Tickets
            </Typography>
            {loading || isLoading ? (
              <CircularProgress sx={{ mt: 2 }} />
            ) : (
              <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
                {totalTickets}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}