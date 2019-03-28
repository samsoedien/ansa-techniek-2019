import { combineReducers } from 'redux';
// import contactReducer from './contactReducer';
import errorReducer from './errorReducer';


export default combineReducers({
//   contact: contactReducer,
  errors: errorReducer,
});
