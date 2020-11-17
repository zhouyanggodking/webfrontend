import React, { Component } from 'react';
import { 
  Link
} from 'react-router-dom';

import './index.scss'

export default class JsHeader extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <ul className="link-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
};