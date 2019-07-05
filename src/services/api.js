import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dropbox--backend.herokuapp.com',
});

export default api;