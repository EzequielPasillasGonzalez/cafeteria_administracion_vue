import axios from 'axios';

const cafeteriaApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://api-services-node-cafe.onrender.com"
    //baseURL: "http://localhost:3000"
})

export default cafeteriaApi;