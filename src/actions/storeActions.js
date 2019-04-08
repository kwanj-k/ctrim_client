import axiosConfig from '../axiosConfig';
import {
    GET_STORES,
    GET_ERRORS,
    CREATE_STORE
} from './types';

// Get Stores
export const loadStores = () => dispatch => {
    return axiosConfig
        .get('stores/')
        .then( res => {
            dispatch(getStores(res.data));
        })
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
}

export const getStores = (stores) => {
    return {
        type: GET_STORES,
        payload: stores
    }
}

// create store

export const createStore =(storeData) => dispatch => {
    return axiosConfig
        .post('stores/', storeData)
        .then(res => {
            console.log(res)
          const resData = res.data;
          dispatch(newStore(resData));
        })
        .catch(err => {
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          }
        );
    };


export const newStore = storeData => {
    return {
      type: CREATE_STORE,
      payload: storeData
    };
  };
