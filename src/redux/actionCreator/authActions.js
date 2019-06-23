import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../constants/actionTypes';

export const registerUser = () => {
  return {
    type: REGISTER_USER,
  };
};

export const registerUserSuccess = userData => {
  return {
    type: REGISTER_USER_SUCCESS,
    userData
  };
};

export const registerUserFailure = error => {
  return {
    type: REGISTER_USER_FAILURE,
    error
  };
};
