import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './Header.css';

import Navbar from './Navbar';
import HeroBanner from './HeroBanner';

const Header = () => (
  <header className="header">
    <Navbar />
    <HeroBanner />
  </header>
);

export default Header;
