import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: "0",
    hour: "0",
    min: "0",
    sec: "0",
  };

  timeConvert = () => {
    var num = this.state.time;
    this.setState({
      hour: Math.floor(num / 3600),
      min: Math.floor((num % 3600) / 60),
      sec: num % 60,
    });
  };

  resertTime = () => {
    
    this.setState({ num: "", hour: 0, min: 0, sec: 0 });
    
  };

  render() {
    return (
      <div className="timer">
        <h1>Type your time</h1>
        <input
          type="text"
          id="time"
          placeholder="Time"
          value={this.state.num}
          onChange={(e) => this.setState({ time: e.target.value })}
        />
        <button type="button" onClick={this.timeConvert}>
          Convert
        </button>
        <br />
        <span>
          <h1>{this.state.hour} </h1>

          <h1>{this.state.min} </h1>

          <h1>{this.state.sec} </h1>
        </span>
        <span>
          <h1>Hour</h1>
          <h1>Minutes</h1>
          <h1>Seconds</h1>
        </span>
        <button type="button" onClick={this.resertTime}>
          Reset
        </button>
      </div>
    );
  }
}
export default Timer;
