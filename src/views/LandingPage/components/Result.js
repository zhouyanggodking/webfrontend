import { Component } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import Table from './Table';
import Outlet from './Outlet';

import { UserContext } from 'context';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  static contextType = UserContext;

  render() {
    const compDict = {
      table: Table,
      bar: BarChart,
      line: LineChart
    }
    const list = this.state.result.map((item, index) => {
      const Comp = compDict[item.type];
      return (
        <Outlet key={index}>
          <Comp></Comp>
        </Outlet>
      )
    });
    return (
      <div className="result-list">
        result component
        {list}
        <div>By {this.context}</div>
      </div>
    );
  }

  componentDidMount() {
    const result = [
      {
        type: 'table'
      },
      {
        type: 'line'
      },
      {
        type: 'bar'
      }
    ];
    this.setState({
      result
    });
  }
};

export default Result;
