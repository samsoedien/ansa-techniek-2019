import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../actions/contactActions';

import Contact from '../components/contact/Contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {},
      confirmation: false,
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
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCallback() {
    const {
      name,
      email,
      subject,
      message,
    } = this.state;
    const formData = {
      name,
      email,
      subject,
      message,
    };

    const { emailContact, history } = this.props;
    emailContact(formData, history);
  }

  render() {
    const {
      name,
      email,
      subject,
      message,
      errors,
      confirmation,
    } = this.state;
    console.log(confirmation);
    return (
      <div className="contact-container">
        <Contact
          name={name}
          email={email}
          subject={subject}
          message={message}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

ContactContainer.propTypes = {
  emailContact: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  confirmation: state.confirmation,
});

export default connect(mapStateToProps, { emailContact })(ContactContainer);
