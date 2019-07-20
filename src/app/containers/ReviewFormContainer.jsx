import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addReview } from '../../actions/reviewActions';

import ReviewForm from '../components/reviews/ReviewForm';

const ReviewFormContainer = ({ addPost }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    comment: '',
    approved: false,
    error: {},
  });

  const { name, company, comment, error } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const reviewData = {
      ...formData,
    };
    addPost(reviewData);
  };

  return (
    <ReviewForm
      name={name}
      company={company}
      comment={comment}
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
    />
  );
};

ReviewFormContainer.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addReview },
)(withRouter(ReviewFormContainer));
