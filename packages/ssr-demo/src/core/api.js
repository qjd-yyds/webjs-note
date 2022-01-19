import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
});
instance.interceptors.response.use((response) => {
  return response.data;
});

// 请求home
export const fetchHome = () => instance.get('/home');
// 请求user
export const fetchUser = () => instance.get('/user');
