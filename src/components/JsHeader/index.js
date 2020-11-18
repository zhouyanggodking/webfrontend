import React, { Component } from 'react';
import { 
  NavLink
} from 'react-router-dom';

import './index.scss'
import User from '../User';

export default class JsHeader extends Component {
  isActive(match, location) {
    if (location.pathname === '/') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <header className="header row">
        <nav className="nav">
          <ul className="link-list row">
            <li className="link"><NavLink to="/" activeClassName="current" isActive={this.isActive}>HOME</NavLink></li>
            <li className="link"><NavLink to="/hoc" activeClassName="current">HOC Demo</NavLink></li>
            <li className="link"><NavLink to="/about" activeClassName="current">About</NavLink></li>
          </ul>
        </nav>
        <User></User>
      </header>
    )
  }
};