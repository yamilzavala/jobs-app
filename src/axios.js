import axios from 'axios';
axios.defaults.baseURL = 'https://jobs-api-fwhk.onrender.com/api/v1';

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem('user');

  if (user) {
    const { token } = JSON.parse(localStorage.getItem('user'));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
