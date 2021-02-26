import axios from 'axios';

const client = axios.create({
  baseURL:'http://localhost:3000/api/',
  withCredentials:true,
})

client.interceptors.request.use(
  config => {
    config.headers['X-Requested-With']='XMLHttpRequest'
    return config;
  }
)

export default client;
