import React, { Component } from 'react';

class Security extends Component {
  render() {
    return (
      <div>
        {this.props.name} - {this.props.price}
      </div>
    );
  }
}

export default Security;
