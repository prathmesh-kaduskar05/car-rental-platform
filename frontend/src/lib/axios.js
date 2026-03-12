import axios from 'axios';

const api = axios.create({
    
    baseURL: 'http://localhost:3000/api/cars'
})

export default api;