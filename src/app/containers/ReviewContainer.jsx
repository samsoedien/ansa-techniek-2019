import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Reviews from '../components/reviews/Reviews';

const ReviewContainer = ({ review: { reviews, loading }, getPosts }) => {
  return <Reviews reviews={reviews} loading={loading} />;
};

ReviewContainer.propTypes = {};

const mapStateToProps = state => ({
  review: state.firestore.ordered.reviews,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'reviews' }]),
)(ReviewContainer);
