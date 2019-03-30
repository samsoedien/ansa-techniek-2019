import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import LOGO from '../../assets/img/ansa-techniek-logo.png';
import Background from '../../assets/img/electrician-3087536.jpg';

const styles = theme => ({
  heroBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100vh',
    width: 'auto',
    height: '100vh',
    zIndex: 100,
    overflow: 'hidden',
  },
  heroBannerImage: {
    position: 'relative',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: '100vh',
    overflow: 'hidden', 
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  heroBannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 255, 255, 0.6)',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .20))',
  },
  heroBannerHeader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  },
  heroBannerSubheader: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  },
});

class HeroBanner extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroBanner} id="home">
        <div className={classes.heroBannerImage} style={{ backgroundImage: `url(${Background})` }}>
          <div className={classes.heroBannerOverlay}>
            <Typography variant="h2" className={classes.heroBannerHeader}>Welkom bij Ansa-Techniek</Typography>
            <Typography variant="body1" className={classes.heroBannerSubheader}>Wij zijn momenteel druk bezig met het opbouwen van de website. Neem contact op voor een op maat gemaakte offerte. </Typography>
          </div>
        </div>
      </div>
    );
  }
}

HeroBanner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(HeroBanner);
