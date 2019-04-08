import { GET_STORES, CREATE_STORE } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        stores: action.payload
      };
    case CREATE_STORE :
      return {
        ...state,
        newStore: action.payload
      };
    default:
      return state;
  }
}
