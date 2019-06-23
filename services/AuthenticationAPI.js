import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class AuthenticationAPI {
    static registerUser(userData) {
        return axios.post(`${baseUrl}register/`, userData);
    }
    static loginUser(userData) {
        return axios.post(`${baseUrl}login/`, userData);
    }
}
export default AuthenticationAPI;
