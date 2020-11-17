import React, { Component } from 'react';

class ComponentCouldGoWrong extends Component {
  // constructor(props) {
  //   super(props);    
  //   //throw new Error();
  // }
  
  render() {
    return (
      <div>
        Error component test, should only work in production mode.
      </div>
    );
  }
}

export default ComponentCouldGoWrong;
