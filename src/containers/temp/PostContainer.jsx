import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  addPost,
  getPosts,
  getPost,
  deletePost,
} from '../../actions/postActions';

import Reviews from '../../components/reviews/Reviews';

class PostContainer extends Components {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
  }

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      post: { posts, loading },
    } = this.props;
    const { comment, errors } = this.state;
    return (
      <div className="post-container">
        <Reviews
          posts={posts}
          loading={loading}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  comment: PropTypes.String,
  isRequired,
};

const mapStateToProps = state => ({
  post: state.firestore.ordered.reviews,
});

export default connect(
  mapStateToProps,
  {
    getPosts,
    addPost,
  },
)(PostContainer);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(PostContainer)
