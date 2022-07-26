import axios from 'axios';

const BASE_URL =
  'https://todo-1a8da-default-rtdb.asia-southeast1.firebasedatabase.app';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
