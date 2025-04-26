import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function TicketTraites({ tickets }) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px' }}>
      <Table>
        {/* En-tête du tableau */}
        <TableHead>
          <TableRow sx={{ bgcolor: 'primary.main' }}>
            <TableCell sx={{ color: 'white', fontWeight: 600 }}>Score</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 600 }}>Num Ticket</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 600 }}>Durée</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        {/* Corps du tableau */}
        <TableBody>
          {tickets.map((ticket, index) => (
            <TableRow key={ticket.id} sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
              <TableCell>{index + 1}</TableCell> {/* Score */}
              <TableCell>#{ticket.id}</TableCell> {/* Num Ticket */}
              <TableCell>{ticket.duree} min</TableCell> {/* Durée */}
              <TableCell sx={{ color: 'green', fontWeight: 600 }}>Traité</TableCell> {/* Status */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}