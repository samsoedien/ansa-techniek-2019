import { combineReducers } from 'redux';
// import contactReducer from './contactReducer';
import errorReducer from './errorReducer';
import postReducer from './postReducer';

export default combineReducers({
//   contact: contactReducer,
  errors: errorReducer,
  post: postReducer,
});
