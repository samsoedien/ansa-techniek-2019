import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../actions/contactActions';

import ContactForm from '../components/contact/ContactForm';

const ContactFormContainer = ({ emailContact, errors }) => {
  useEffect(() => {
    console.log(errors);
  }, []);

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
    selectedFile: null,
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
  } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileCallback = e => setFormData({ selectedFile: e.target.files[0] });

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
      onFileCallback={onFileCallback}
      onSubmitCallback={onSubmitCallback}
      onHandleCheckboxCallback={onHandleCheckboxCallback}
    />
  );
};

ContactFormContainer.propTypes = {
  emailContact: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { emailContact },
)(ContactFormContainer);

// Need to handle validation errors
