
import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink as Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  AppBar,
  Toolbar,
} from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import LOGO from '../../assets/img/ansa-techniek-logo-cropped.png';


const styles = theme => ({
  navbar: {
    zIndex: 1000,
  }
});

const Navbar = ({ classes }) => {
  return (
    <AppBar position="static" color="default" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Navbar);
