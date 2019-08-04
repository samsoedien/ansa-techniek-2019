import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Footer.css';

import YESSS_LOGO from '../../assets/img/yesss-electrical-logo-rgb.png';
import ZOOFY_LOGO from '../../assets/img/zoofy-logo.png';
import BOUWLUST_LOGO from '../../assets/img/bouwlust-logo.png';
import PRACHT_LOGO from '../../assets/img/pracht-installatietechniek-logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container justify="space-evenly">
        <Grid item>
          <h6>Contactgegevens</h6>
          <p className="paragraph">André Samsoedien</p>
          <p className="paragraph">+31 (0)6 37 36 28 17</p>
          <p className="paragraph">info@ansa-techniek.nl</p>
        </Grid>
      </Grid>
      <Grid container justify="space-evenly">
        <Grid item>
          <h6>Partners van Ansa-Techniek</h6>
          <a
            href="https://www.yesss.nl/"
            target="_blank"
            className="logo--link"
          >
            <img
              src={YESSS_LOGO}
              height="50px"
              alt="yesss_logo"
              className="footer__logo footer__logo--yesss"
            />
          </a>
          <a href="https://zoofy.nl/" target="_blank" className="logo--link">
            <img
              src={ZOOFY_LOGO}
              height="80px"
              alt="zoofy_logo"
              className="footer__logo footer__logo--zoofy"
            />
          </a>
          <a
            href="https://www.bouwlust.net/"
            target="_blank"
            className="logo--link"
          >
            <img
              src={BOUWLUST_LOGO}
              height="44px"
              alt="bouwlust_logo"
              className="footer__logo footer__logo--bouwlust"
            />
          </a>
          <a
            href="https://www.prachtbv.nl/"
            target="_blank"
            className="logo--link"
          >
            <img
              src={PRACHT_LOGO}
              height="44px"
              alt="pracht_logo"
              className="footer__logo footer__logo--pracht"
            />
          </a>
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
