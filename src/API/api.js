import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YOUR_ACCESS_KEY',
  },
});

export default instance;
