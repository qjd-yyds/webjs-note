import axios from 'axios';
import { SERVER } from './constant';

const req = axios.create({
  baseURL: `${SERVER}/api`,
  timeout: 15000
});

req.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error);
  }
);

req.interceptors.response.use((response) => {
  const d = response.data || {};
  if (d.code !== '0' && typeof window !== 'undefined') {
    alert(d.description);
  }
  return d.data;
});

export default req;
