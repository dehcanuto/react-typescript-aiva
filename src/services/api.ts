import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/products?limit=10&offset=0',
});

export default api;
