import axios from 'axios';
import qs from 'qs';
const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  transformRequest: (data) => {
    return qs.stringify(data);
  },
  baseURL: '/miaov' // https://data.miaov.com
});

export default http;
