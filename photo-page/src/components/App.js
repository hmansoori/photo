import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../constants/routes';
import AboutPage from './AboutPage';
import PhotoPage from './PhotoPage';
import ContactPage from './ContactPage';
import Navigation from './Navigation';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navigation />
        
  
        <Route exact path={routes.ABOUT} component={() => <AboutPage />} />
        <Route exact path={routes.PHOTOS} component={() => <PhotoPage />} />
        <Route exact path={routes.CONTACT} component={() => <ContactPage />} />
  
      </div>
    </Router>
    );
  }
}

export default App;
