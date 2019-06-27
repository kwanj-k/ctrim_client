import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import errorReducer from './errorReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    stores: storeReducer,
    errors: errorReducer  
})

export default rootReducer;
