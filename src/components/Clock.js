import { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      name: 'king'
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onBtnStopClick() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        {this.state.date.toUTCString()} - {this.state.name}
        <button onClick={() => this.onBtnStopClick()}>stop</button>
      </div>
    )
  }
}