import React, { Component } from 'react';
import Counter from './components/Counter';

class HooksPage extends Component {  
  render() {
    return (
      <div>
        <div>Hooks are functions that let you 'hook into' React state and lifecycle features from <b>function component</b></div>
        <div>Hooks don't work inside classes - they let you use React without classes</div>
        <hr/>
        <Counter></Counter>
      </div>
    );
  }
}

export default HooksPage;
