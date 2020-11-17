import { 
  Switch,
  Route
} from 'react-router-dom';

import React, { Component } from 'react';

import LandingPage from './views/LandingPage';
import AboutPage from './views/AboutPage';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    );
  }
}

export default Router;
