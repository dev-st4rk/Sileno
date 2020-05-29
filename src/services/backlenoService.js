import axios from 'axios';
import { AUTH } from 'react-native-dotenv';

const backleno = axios.create({
    baseURL: 'http://10.0.0.31:8080',
    timeout: 1000,
    headers: {
        authorization: AUTH
    }
});

module.exports = backleno;