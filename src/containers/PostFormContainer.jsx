import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost } from '../actions/postActions';

import PostForm from '../components/posts/PostForm';

class PostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    switch (e.target.name) {
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitCallback() {
    const { name, company, rating, comment } = this.state;

    const formData = {
      comment,
    };
    const { addPost, history } = this.props;
    addPost(formData, history);
  }

  render() {
    const { name, company, rating, comment, errors } = this.state;
    return (
      <div className="blog-form-container">
        <PostForm
          comment={comment}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

PostFormContainer.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string,
  }).isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addPost },
)(withRouter(PostFormContainer));
