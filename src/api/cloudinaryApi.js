import axios from 'axios';

const cloudinaryApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://api.cloudinary.com/v1_1/dsewcra3v/image/upload"
})

export default cloudinaryApi;