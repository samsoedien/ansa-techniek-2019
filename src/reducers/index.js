import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import alertReducer from './alertReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';
// import contactReducer from './contactReducer';

export default combineReducers({
  fireStore: firestoreReducer,
  alert: alertReducer,
  errors: errorReducer,
  post: postReducer,
  // contact: contactReducer,
});
