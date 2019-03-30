import axiosConfig from '../axiosConfig';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';


// Register User
export const registerUser = (userData) => dispatch => {
    return axiosConfig
      .post('register/', userData)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const userInfo = res.data;
        dispatch(setCurrentUser(userInfo));
        })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  
  // Login - Get User Token
  export const loginUser =(userData) => dispatch => {
    return axiosConfig
      .post('login/', userData)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const userInfo = res.data;
        dispatch(setCurrentUser(userInfo));
      })
      .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        }
      );
  };
  
export const setCurrentUser = userInfo => {
    return {
      type: SET_CURRENT_USER,
      payload: userInfo
    };
  };
  
  // Log user out
  export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
