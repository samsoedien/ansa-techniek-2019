import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../actions/contactActions';

import Contact from '../components/contact/Contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      postalCode: '',
      city: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      offerte: false,
      errors: {},
    };
    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onHandleCheckboxCallback = this.onHandleCheckboxCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeCallback(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onHandleCheckboxCallback = (name, e) => {
    this.setState({ [name]: e.target.checked });
  };

  onSubmitCallback() {
    const {
      firstName,
      lastName,
      address,
      postalCode,
      city,
      email,
      phone,
      subject,
      message,
      offerte,
    } = this.state;
    const formData = {
      firstName,
      lastName,
      address,
      postalCode,
      city,
      email,
      phone,
      subject,
      message,
      offerte,
    };
    const { emailContact, history } = this.props;
    emailContact(formData, history);
    
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   address: '',
    //   postalCode: '',
    //   city: '',
    //   email: '',
    //   phone: '',
    //   subject: '',
    //   message: '',
    //   offerte: '',
    // });
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      postalCode,
      city,
      email,
      phone,
      subject,
      message,
      offerte,
      errors,
    } = this.state;
    return (
      <div className="contact-container">
        <Contact
          firstName={firstName}
          lastName={lastName}
          address={address}
          postalCode={postalCode}
          city={city}
          email={email}
          phone={phone}
          subject={subject}
          message={message}
          offerte={offerte}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          onHandleCheckboxCallback={this.onHandleCheckboxCallback}
        />
      </div>
    );
  }
}

ContactContainer.propTypes = {
  emailContact: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    offerte: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  confirmation: state.confirmation,
});

export default connect(mapStateToProps, { emailContact })(ContactContainer);
