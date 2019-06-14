import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import errorReducer from './errorReducer';
import postReducer from './postReducer';
// import contactReducer from './contactReducer';

export default combineReducers({
  fireStore: firestoreReducer,
  errors: errorReducer,
  post: postReducer,
  // contact: contactReducer,
});
