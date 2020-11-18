import React, { Component } from 'react';
import Logger from './Logger';

const withLoggerHOC = (Comp, loggerFunc) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      loggerFunc('componentDidMount')
    }

    componentWillUnmount() {
      loggerFunc('componentWillUnmount')
    }
    
    render() {
      return (
        <Comp {...this.props}></Comp>
      );
    }
  }
}

export default withLoggerHOC;