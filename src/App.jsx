import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import store from './store/store';
import theme from './theme/theme';
// import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/about/About';
import ContactContainer from './containers/ContactContainer';
import Navbar from './components/layout/Navbar';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <main className="app-main">
          <About />
          <ContactContainer />
        </main>
        <Footer />
        </div> 
    </MuiThemeProvider>
  </Provider>
);

export default App;
