import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SessionPage from './SessionPage';

export default function Index() {
  return (
    <MainCard title="Ma session">
      <SessionPage />
    </MainCard>
  );
}
