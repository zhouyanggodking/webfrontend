import React, { Component } from 'react';
import { 
  NavLink
} from 'react-router-dom';

import './index.scss'

export default class JsHeader extends Component {
  isActive(match, location) {
    if (location.pathname === '/') {
      return true;
    }
    return false;
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <ul className="link-list">
            <li><NavLink to="/" activeClassName="current" isActive={this.isActive}>HOME</NavLink></li>
            <li><NavLink to="/about" activeClassName="current">About</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
};