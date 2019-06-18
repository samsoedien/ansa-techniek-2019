import axios from 'axios';

import { SEND_MAIL, GET_ERRORS, CLEAR_ERRORS } from '../constants/types';

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const emailContact = formData => async dispatch => {
  dispatch(clearErrors());
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await axios.post(
      'https://us-central1-ansa-techniek.cloudfunctions.net/contact',
      formData,
      config,
    );
    dispatch({
      type: SEND_MAIL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
