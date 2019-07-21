import axios from 'axios';

axios.defaults.proxy = {
  host: 'localhost',
  port: 8080,
}