import axios from 'axios';

const client = axios.create({
  baseURL:'https://take-a-camp-api.herokuapp.com/api/',
  withCredentials:true,
})

client.interceptors.request.use(
  config => {
    config.headers['X-Requested-With']='XMLHttpRequest'
    return config;
  }
)

export default client;
