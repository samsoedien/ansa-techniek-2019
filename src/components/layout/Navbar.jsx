import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import './Navbar.css';


import ScrollWrapper from '../../wrappers/ScrollWrapper';

const styles = {
}

const Navbar = ({ classes }) => {
  const handleScroll = scrollDistance => {
    const navElement = document.getElementById('myNav');
    if (scrollDistance > 80) {
      navElement.classList.add('header-nav--shrink');
    } else {
      navElement.classList.remove('header-nav--shrink');
    }
  };
  return (
    <ScrollWrapper onWindowScroll={handleScroll}>
      <nav className="header-nav hero-banner__image--bg-elem hero-banner__image--clip" id="myNav">
        <div className="header-nav--container">
          <ul className="header-nav-list">
            <Scrollspy items={['home', 'about', 'contact']} currentClassName="is-current">
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#home">Home</AnchorLink></li>
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#about">Over Ons</AnchorLink></li>
              <li className="header-nav-list-item"><AnchorLink offset="42" className="header-nav-link" href="#contact">Offerte Aanvraag</AnchorLink></li>
              <Button href="tel:0637362817" variant="outlined" color="secondary" size="large" className="header-nav-button">Telefoon: +31 (0)6 37 36 28 17</Button>
            </Scrollspy>
          </ul>
        </div>
      </nav>
    </ScrollWrapper>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Navbar);
