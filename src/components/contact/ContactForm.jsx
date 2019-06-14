import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Fade } from 'react-reveal';

const styles = theme => ({
  contactForm: {
    margin: '24px',
  },
  contactFormInput: {
    marginBottom: '24px',
    width: '100%',
  },
  contactFormButton: {
    marginBottom: '12px',
    float: 'right',
    color: '#fff',
  },
  contactFormInputTextarea: {
    marginBottom: '24px',
    width: '100%',
  },
  contactHeader: {
    marginTop: '24px',
  },
});

const Contact = ({
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
  onChangeCallback,
  onSubmitCallback,
  onHandleCheckboxCallback,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  const onHandleCheckbox = name => e => {
    onHandleCheckboxCallback(name, e);
  };

  return (
    <section className="contact" id="contact">
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
          <article className="about__article">
            <Typography variant="h3" className={classes.contactHeader}>
              Contact
            </Typography>
            <Typography variant="body1" paragraph>
              Bij een aanvraag van een offerte wordt er eerst de juiste
              informatie verzamelt over hoe opdracht uitgevoert moet worden. Dit
              is om aan de wensen van u zo goed mogelijk te voldoen, u duidelijk
              te adviseren en elkaar niet achteraf te verassen met onvoorziende
              extra kosten. In de meeste gevallen maken we een afspraak om het
              werk op te nemen en te bespreken. We nodigen u uit om contact op
              te nemen voor een vrijblijvende offerte met een geldigheid van 30
              dagen.
            </Typography>
            <Typography variant="body1" paragraph>
              Heeft u een klus of storing kunt u het onderstaande contact
              formulier invullen. Ook voor vragen kunt u met het formulier
              contact met ons opnemen.
            </Typography>
          </article>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11} sm={9} md={7} lg={5}>
          <form
            onSubmit={onSubmit}
            className={classes.contactForm}
            noValidate
            autoComplete="off"
          >
            <Grid container justify="space-between">
              <Grid item xs={5}>
                <TextField
                  className={classes.contactFormInput}
                  label="Voornaam*"
                  type="name"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
                  error={errors.firstName}
                  helperText={errors ? errors.firstName : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={classes.contactFormInput}
                  label="Achternaam*"
                  type="name"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
                  error={errors.lastName}
                  helperText={errors ? errors.lastName : ''}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={6}>
                <TextField
                  className={classes.contactFormInput}
                  label="Adres + Huisnummer"
                  name="address"
                  value={address}
                  onChange={onChange}
                  error={errors.address}
                  helperText={errors ? errors.address : ''}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  className={classes.contactFormInput}
                  label="Postcode"
                  name="postalCode"
                  value={postalCode}
                  onChange={onChange}
                  error={errors.postalCode}
                  helperText={errors ? errors.postalCode : ''}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  className={classes.contactFormInput}
                  label="Woonplaats"
                  name="city"
                  value={city}
                  onChange={onChange}
                  error={errors.city}
                  helperText={errors ? errors.city : ''}
                />
              </Grid>
            </Grid>
            <TextField
              className={classes.contactFormInput}
              label="E-mailadres*"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              error={errors.email}
              helperText={errors ? errors.email : ''}
            />
            <TextField
              className={classes.contactFormInput}
              label="Telefoonnummer*"
              name="phone"
              value={phone}
              onChange={onChange}
              error={errors.phone}
              helperText={errors ? errors.phone : ''}
            />
            <br />
            <br />
            <TextField
              className={classes.contactFormInput}
              label="Omschrijving"
              type="subject"
              name="subject"
              value={subject}
              onChange={onChange}
              error={errors.subject}
              helperText={errors ? errors.subject : ''}
            />
            <TextField
              className={classes.contactFormInputTextarea}
              label="Uw bericht*"
              multiline
              rows="7"
              name="message"
              value={message}
              onChange={onChange}
              error={errors.message}
              helperText={errors ? errors.message : ''}
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={offerte}
                    onChange={onHandleCheckbox('offerte')}
                    color="primary"
                  />
                }
                label="Offerte gewenst"
              />
            </FormGroup>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
              className={classes.contactFormButton}
            >
              Verzenden
            </Button>
          </form>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={8} lg={6} xl={6}>
          <article className="about__article">
            <Typography variant="body1" paragraph>
              Alle uitgevoerde werkzaamheden worden met 1 jaar garantie gelevert
              op montage en materiaal. Indien de klant zelf de materalen beschik
              wordt alleen garantie gegeven op de montage.
            </Typography>
          </article>
        </Grid>
      </Grid>
    </section>
  );
};

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  offerte: PropTypes.bool.isRequired,
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
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onHandleCheckboxCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Contact);
