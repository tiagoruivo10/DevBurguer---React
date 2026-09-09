import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburguer:userData');

  if (userData) {
    try {
      const parsed = JSON.parse(userData);
      if (parsed?.token) {
        config.headers.authorization = `Bearer ${parsed.token}`;
      }
    } catch {
      localStorage.removeItem('devburguer:userData');
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('devburguer:userData');
    }
    return Promise.reject(error);
  },
);
