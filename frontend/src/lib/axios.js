import axios from 'axios';

const api = axios.create({
    
    baseURL: 'https://car-rental-platform-9rjo.onrender.com/'
})

export default api;