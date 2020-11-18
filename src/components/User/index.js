import React, { Component } from 'react';
import { UserContext } from 'context';

class User extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        {this.context}
      </div>
    );
  }
}

export default User;
