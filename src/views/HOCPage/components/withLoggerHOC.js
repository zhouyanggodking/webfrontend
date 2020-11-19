import React, { Component } from 'react';

const withLoggerHOC = (Comp, loggerFunc) => {
  return class extends Component {
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