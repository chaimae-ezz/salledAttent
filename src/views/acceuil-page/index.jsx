import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import HomeQueue from './HomeQueue';


export default function HomePage() {
  return (
    <MainCard title="Acceuil">
      <HomeQueue />
    </MainCard>
  );
}