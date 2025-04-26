import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082', // Utilisation directe de l'URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Assurez-vous que le token existe
  },
  withCredentials: true // IMPORTANT pour les cookies et sessions
});

// Intercepteur pour gérer les erreurs globalement
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur API :', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
