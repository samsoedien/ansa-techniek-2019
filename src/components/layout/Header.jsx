import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Navbar from './Navbar';
import HeroBanner from './HeroBanner';

const styles = theme => ({
  mainHeader: {
    position: 'static',
    height: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 200,
    boxShadow: '0px 8px 20px -10px rgba(0,0,0,0.8)',
  },
});

const Header = ({ classes }) => (
  <header className={classes.mainHeader}>
    <Navbar />
    <HeroBanner />
  </header>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Header);
