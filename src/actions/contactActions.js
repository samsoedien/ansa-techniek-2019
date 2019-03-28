import axios from 'axios';

import {
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../constants/types';

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const emailContact = (formData, history) => dispatch => {
  axios
    // .post('/api/contact/', formData)
    .post('https://design-portfolio-backend.herokuapp.com/api/contact/', formData)
    .then(res => history.push('/'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
