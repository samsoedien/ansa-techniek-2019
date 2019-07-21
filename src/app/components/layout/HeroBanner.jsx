import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import './HeroBanner.css';

import LOGO from '../../assets/img/ansa-techniek-logo.png';
import Background from '../../assets/img/electrician-3087536.jpg';

class HeroBanner extends Component {
  render() {
    return (
      <div className="hero-banner" id="home">
        <div
          className="hero-banner__image"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="hero-banner__overlay">
            <h2 className="hero-banner__heading">Welkom bij Ansa-Techniek</h2>
            <p className="hero-banner__subheading">
              Uw technisch vakman in het verlenen van installatietechniek aan
              huis.{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
