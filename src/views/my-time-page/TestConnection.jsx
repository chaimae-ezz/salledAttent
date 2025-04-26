import React, { useEffect, useState } from 'react';
import axiosInstance from 'api/axiosConfig'; // Assurez-vous que le chemin est correct

function TestConnection() {
  const [message, setMessage] = useState(''); // État pour stocker la réponse du backend
  const [error, setError] = useState(''); // État pour stocker les erreurs

  // Fonction pour envoyer la requête GET au backend
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/test/hello'); // Endpoint de test
      setMessage(response.data); // Stocker la réponse dans l'état
      setError(''); // Effacer les erreurs précédentes
    } catch (error) {
      console.error('Erreur lors de la connexion au backend :', error);
      setError('Erreur lors de la connexion au backend. Voir la console pour plus de détails.');
      setMessage(''); // Effacer le message précédent
    }
  };

  // Utiliser useEffect pour envoyer la requête au chargement du composant
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test de connexion au backend</h1>
      {message && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          <strong>Réponse du backend :</strong> {message}
        </div>
      )}
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <strong>Erreur :</strong> {error}
        </div>
      )}
    </div>
  );
}

export default TestConnection;