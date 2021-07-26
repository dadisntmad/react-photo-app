import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7320nK4smLMmTDYiZwkX_dyMq6DkQNLCE0t7mH-IKgE',
  },
});

export default instance;
