import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../actions/contactActions';

import ContactForm from '../components/contact/ContactForm';

const ContactContainer = ({ emailContact }) => {
  const [formData, setFormData] = useState({
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
  });

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
  } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const contactData = {
      ...formData,
    };
    emailContact(contactData);
  };

  const onHandleCheckboxCallback = (name, e) =>
    setFormData({ [name]: e.target.checked });

  return (
    <ContactForm
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
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
      onHandleCheckboxCallback={onHandleCheckboxCallback}
    />
  );
};

ContactContainer.propTypes = {
  emailContact: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { emailContact },
)(ContactContainer);

// Need to handle validation errors
