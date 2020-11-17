import React, { Component } from 'react';

class ComponentCouldGoWrong extends Component {
  constructor(props) {
    super(props);    
    //throw new Error();
  }
  

  componentWillMount() {

  }
  
  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

export default ComponentCouldGoWrong;
