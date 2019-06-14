import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import store from './store/store';
import theme from './theme/theme';
// import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/about/About';
import Reviews from './components/reviews/Reviews';
import ContactContainer from './containers/ContactContainer';
import PostFormContainer from './containers/PostFormContainer';
import Navbar from './components/layout/Navbar';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <main className="app-main">
            <About />
            <Reviews />
            <PostFormContainer />
            <ContactContainer />
          </main>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
