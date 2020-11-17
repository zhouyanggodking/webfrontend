import React, { Component } from 'react';
import './index.scss'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }  

  //to render a fallback UI after error
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    console.log('log to server');
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="error-boundary">
          Error Occurred!
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
