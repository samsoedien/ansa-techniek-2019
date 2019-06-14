import axios from 'axios';

import { SEND_MAIL, GET_ERRORS, CLEAR_ERRORS } from '../constants/types';

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const emailContact = () => {};
// export const emailContact = (formData, history) => async (
//   dispatch,
//   { getFirebase, getFirestore },
// ) => {
//   dispatch(clearErrors());

//   try {
//     // const config = {
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // };
//     // const res = await axios.post(
//     //   'https://ansa-techniek-backend.herokuapp.com/api/contact/',
//     //   formData,
//     //   config,
//     // );
//     const firestore = getFirestore();
//     await firestore.collection('post').add({
//       ...post,
//     });
//     dispatch({
//       type: SEND_MAIL,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data,
//     });
//   }
// };
