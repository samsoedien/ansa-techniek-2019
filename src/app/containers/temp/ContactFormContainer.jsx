import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../../../actions/contactActions';

import ContactForm from '../../components/contact/ContactForm';
import Alert from '../../components/layout/Alert';

class ContactFormContainer extends Component {
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
      date: '',
      preferredDate: false,
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

  onSubmitCallback(e) {
    e.preventDefault();
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
      preferredDate,
      date,
      offerte,
    } = this.state;
    const contactData = {
      firstName,
      lastName,
      address,
      postalCode,
      city,
      email,
      phone,
      subject,
      message,
      preferredDate,
      date,
      offerte,
    };
    const { emailContact } = this.props;
    emailContact(contactData);

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
      preferredDate,
      date,
      errors,
    } = this.state;
    return (
      <Fragment>
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
          preferredDate={preferredDate}
          date={date}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
          onHandleCheckboxCallback={this.onHandleCheckboxCallback}
        />
        <Alert />
      </Fragment>
    );
  }
}

ContactFormContainer.propTypes = {
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
});

export default connect(
  mapStateToProps,
  { emailContact },
)(ContactFormContainer);
