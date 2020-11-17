import React, { Component } from 'react';
import './index.scss';

class index extends Component {
    
  render() {
    return (
      <div className="outlet-container">
        {this.props.children}
      </div>
    );
  }
}

export default index;
