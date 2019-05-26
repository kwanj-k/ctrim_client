import {
  GET_STORES,
  CREATE_STORE,
  DELETE_STORE
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        stores: action.payload
      };
    case CREATE_STORE:
      return {
        ...state,
        newStore: action.payload
      };
    case DELETE_STORE:
      return {
        ...state
      }
    default:
      return state;
  }
}
