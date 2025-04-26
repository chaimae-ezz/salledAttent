
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import AgentForm from './AgentForm';

export default function AgentPage() {
  return (
    <MainCard title="Ajouter un Agent">
      <AgentForm />
    </MainCard>
  );
}