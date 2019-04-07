import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    stores: storeReducer,
    errors: errorReducer  
})
