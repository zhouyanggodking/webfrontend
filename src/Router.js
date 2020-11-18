import { 
  Switch,
  Route
} from 'react-router-dom';

import React, { Component } from 'react';

import LandingPage from './views/LandingPage';
import HOCPage from './views/HOC';
import AboutPage from './views/AboutPage';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route path="/hoc">
          <HOCPage></HOCPage>
        </Route>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
      </Switch>
    );
  }
}

export default Router;
