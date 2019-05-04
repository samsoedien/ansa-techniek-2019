import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addPost,
  getPosts,
  getPost,
  deletePost,
} from '../actions/postActions';

import Reviews from '../components/reviews/Reviews';

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
    const { posts: { post, loading }, auth } = this.props;
    const {
      comment,
      errors,
    } = this.state;
    return (
      <div className="post-container">
        <Reviews
          comment={comment}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  comment: PropTypes.String,isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getPosts,
  addPost,
})(PostContainer);