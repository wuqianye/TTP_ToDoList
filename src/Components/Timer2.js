import React, { Component } from "react";
import { render } from "react-dom";

export default class Timer2 extends Component {
  state = {
    minutes: 1,
    seconds: 5,
    onStart: false,
    isRunning: false,
  };

  startCountdown = () => {
    this.setState({ onStart: true });
    this.timestart();
  };

  timestart = () => {
    //starts the countdown timer
    if(this.state.isRunning === false){
    this.myInterval = setInterval(() => {
      const { seconds, minutes, isRunning} = this.state;
      this.setState({isRunning: true});
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  } else return;
  };

  timepause = () => {
    //pauses the countdown timer
    this.setState({isRunning: false})
    clearInterval(this.myInterval);
  };

  increaseMin = () => {
    
  }
  render() {
    const { minutes, seconds, onStart } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {/* timer */}
        <div class="time-container">
        <div style={{ fontSize: "100px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        {/* arrows */}
        <div class="timer-buttons">
          <button>+</button>
          <button>-</button>
        </div>
        </div>
        {/* buttons */}
        {!onStart ? (
          <button class="start-button" onClick={this.startCountdown}>START TIMER</button>
        ) : (
          <div>
            <button class="time-button" onClick={this.timepause}>Pause</button>
            <button class="time-button" onClick={this.timestart}>Resume</button>
            <button class="time-button">Restart</button>
          </div>
        )}
      </div>
    );
  }
}
