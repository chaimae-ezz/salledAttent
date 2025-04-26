import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import CategorieForm from './CategorieForm';
export default function SamplePage() {
  return (
    <MainCard title="Ajouter une Catégorie">
      <CategorieForm />
    </MainCard>
  );
}