import axios from 'axios';
import loadingState from '../src/commomComponents/Loading/index.state';

axios.defaults.baseURL = '/fund';

// axios.defaults.timeout = 60 * 1000;

// axios.interceptors.request.use(
//   config => {
//     loadingState.showLoading();
//   },
//   err => {
//     loadingState.hideLoading();
//   }
// )

// axios.interceptors.response.use(
//   response => {
//     loadingState.hideLoading();
//   },
//   err => {
//     loadingState.hideLoading();
//   }
// )

// axios.defaults.proxy = {
//   host: 'localhost',
//   port: 8080,
// }
