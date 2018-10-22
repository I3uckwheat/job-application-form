import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.t-r.com/',
  headers: {
    // Authorization: 'Bearer {token}'
  },
});
