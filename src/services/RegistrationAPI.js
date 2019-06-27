import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class RegistrationAPI {
    
    static register(userData) {  
        return axios.post(`${baseUrl}register/`, userData);
    }
}
   
export default RegistrationAPI;
