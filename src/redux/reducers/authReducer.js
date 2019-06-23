import {
  REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE
} from '../constants/actionTypes';

const initialState = {
  isRegistered: false,
  isLoading: false,
  error: {},
  user: {}
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, isLoading: true, isRegistered: false };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
        error: {},

      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
        error: {
          error: action.error
        }

      };
  }
}
export default registration;

