import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/firebase';

import rootReducer from '../reducers';

const initialState = {};

const middleware = [
  thunk.withExtraArgument({ getFirebase, getFirestore }),
  logger,
];

// const composeEnhancers = composeWithDevTools();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// reduxFirestore(fbConfig),
// reactReduxFirebase(fbConfig),

export default store;
