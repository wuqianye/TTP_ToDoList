import React, { Component } from "react";
import { render } from "react-dom";

export default class Timer2 extends Component {
  state = {
    minutes: 1,
    seconds: 5,
  };

  componentDidMount(){
    this.myInterval = setInterval(() => {
      const {seconds, minutes} = this.state;
      if (seconds > 0){
        this.setState (({seconds}) =>({
          seconds: seconds-1
        }))
      } else if (seconds === 0){
        if (minutes === 0){
          clearInterval(this.myInterval)
        } else {
          this.setState(({minutes}) => ({
            minutes: minutes - 1, 
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <p></p>
        <button class="time-button">Start</button>
        <button class="time-button">Pause</button>
        <button class="time-button">Resume</button>
        <button class="time-button">Restart</button>
      </div>
    );
  }
}
