import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Footer.css';

import YESSS_LOGO from '../../assets/img/yesss-electrical-logo-rgb.png';
import ZOOFY_LOGO from '../../assets/img/zoofy-logo.png';
import BOUWLUST_LOGO from '../../assets/img/bouwlust-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container justify="space-evenly">
        <Grid item>
          <img
            src={YESSS_LOGO}
            height="50px"
            alt="yesss_logo"
            className="footer__logo footer__logo--yesss"
          />
          <img
            src={ZOOFY_LOGO}
            height="80px"
            alt="zoofy_logo"
            className="footer__logo footer__logo--zoofy"
          />
          <img
            src={BOUWLUST_LOGO}
            height="44px"
            alt="bouwlust_logo"
            className="footer__logo footer__logo--bouwlust"
          />
        </Grid>
      </Grid>

      <div className="footer__copyright">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}, Ansa-Techniek. All rights
            reserved.
          </p>
          <p>Website created by Samsoedien Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
