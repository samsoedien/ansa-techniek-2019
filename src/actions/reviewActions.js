import axios from 'axios';

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
} from '../constants/types';

// Set loading state
export const setPostLoading = () => ({ type: POST_LOADING });

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// Add Post
export const addReview = reviewData => async (
  dispatch,
  getState,
  { getFirebase, getFirestore },
) => {
  dispatch(clearErrors());
  try {
    const firestore = getFirestore();
    const res = await firestore.collection('reviews').add({
      ...reviewData,
      date: new Date(),
    });
    dispatch({
      type: ADD_POST,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err,
    });
  }
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      }),
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null,
      }),
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      }),
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};
