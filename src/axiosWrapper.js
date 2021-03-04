import axios from 'axios';

const client = axios.create({
  baseURL:'https://take-a-camp-api.herokuapp.com/api/',
})

client.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return config;
  }
)

export default client;
