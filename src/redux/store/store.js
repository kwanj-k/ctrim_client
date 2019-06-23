import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from '../reducers'
import rootSaga from '../middleware'
import setAuthToken from '../../utils/setAuthToken';
import isExpired from '../../utils/isExpired';


const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware =composeEnhancers(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, middleware);
const token = localStorage.getItem('jwtToken');
if (token) {
    const expiryCheck = isExpired(token)
    if (!expiryCheck) {
        setAuthToken(token);
    }
    else {
        setAuthToken()
    }
}
sagaMiddleware.run(rootSaga);

export default store;
