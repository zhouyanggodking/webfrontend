import { Component } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import Table from './Table';
import Outlet from './Outlet';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }
  render() {
    const list = this.state.result.map((item, index) => {
      let comp = '';
      if (item.type === 'table') {
        comp = <Table></Table>
      } else if (item.type === 'bar') {
        comp = <BarChart></BarChart>
      } else if (item.type === 'line') {
        comp = <LineChart></LineChart>
      }
      return (
        <Outlet key={index}>
          {comp}
        </Outlet>
      )
    });
    return (
      <div className="result-list">
        result component
        {list}
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
