import axios from 'axios';

const cafeteriaOrderApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://api-bd-node---cafe-default-rtdb.firebaseio.com"
})

export default cafeteriaOrderApi;