import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/rootReducer';
import setAuthToken from '../../utils/setAuthToken';
import isExpired from '../../utils/isExpired';


let middlewares = [
  thunk
];
const devMiddleware = [logger, reduxImmutableStateInvariant()];

if (process.env === 'development') {
  middlewares.concat(devMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const token = localStorage.getItem('jwtToken');
if (token ) {
  const expiryCheck = isExpired(token)
  if (!expiryCheck) {
    setAuthToken(token);
  }
  else{
    setAuthToken()
  }
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
