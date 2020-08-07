import axios from 'axios';

export default axios.create({
    baseURL: 'https://marshallchikariapi.herokuapp.com/api/v1/products'
});