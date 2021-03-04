import axios from 'axios';

const client = axios.create({
  baseURL:'http://localhost:3000/api/',
})

client.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return config;
  }
)

export default client;
