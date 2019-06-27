import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../constants/actionTypes';

export const registerUser = userData => {
  return {
    type: REGISTER_USER,
    userData
  };
};

export const registerUserSuccess = newUser => {
  return {
    type: REGISTER_USER_SUCCESS,
    newUser
  };
};

export const registerUserFailure = error => {
  return {
    type: REGISTER_USER_FAILURE,
    error
  };
};
