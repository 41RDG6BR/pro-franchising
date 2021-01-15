import axios from 'axios';
import { getToken } from 'src/utils/user';

const axiosInstance = axios.create({
  baseURL: 'https://prova.profranchising.com.br',
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) { config.headers.Authorization = token; }
  return config;
},
(error) => {
  return Promise.reject(error);
});
export default axiosInstance;
