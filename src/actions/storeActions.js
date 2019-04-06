import axiosConfig from '../axiosConfig';
import { GET_STORES, GET_ERRORS } from './types';

// Get Stores
export const loadStores = () => dispatch => {
    return axiosConfig
        .get('stores/')
        .then( res => {
            // console.log(res.data[0])
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
