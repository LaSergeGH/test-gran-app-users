import axios from 'axios';

export default axios.create({
  // baseURL: 'https://test-gran-app-users.onrender.com',
  baseURL: 'http://localhost:8383',
  headers: {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
  },
});
