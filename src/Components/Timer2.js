import React, { Component } from "react";
import { render } from "react-dom";

export default class Timer2 extends Component {
  state = {
    minutes: 1,
    seconds: 0,
    currentMinutes: 0,
    currentSeconds: 0,
    onStart: false,
    isRunning: false,
  };



  startCountdown = () => { //starts the countdown officially, showing the buttons to modify
    this.setState({ onStart: true });
    this.timestart();
    this.setState(({currentMinutes: this.state.minutes})) // set the current minutes to the time it is now.
    
  };

  timestart = () => {  //starts the countdown timer
    if(this.state.isRunning === false){
    this.myInterval = setInterval(() => {
      const { currentSeconds, currentMinutes, isRunning} = this.state;
      this.setState({isRunning: true});
      if (currentSeconds > 0) {
        this.setState(({ currentSeconds }) => ({
          currentSeconds: currentSeconds - 1,
        }));
      } else if (currentSeconds === 0) {
        if (currentMinutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ currentMinutes }) => ({
            currentMinutes: currentMinutes - 1,
            currentSeconds: 59,
          }));
        }
      }
    }, 1000);
  } else return;
  };

  timepause = () => {    //pauses the countdown timer
    this.setState({isRunning: false})
    clearInterval(this.myInterval);
  };

  timeRestart = () => { //restarts the time to what the user originally in
    this.timepause();
    const { currentSeconds, currentMinutes} = this.state;
    this.setState(({
      onStart:false,
      currentSeconds: this.state.seconds,
      currentMinutes: this.state.minutes
    }));
  }

  increaseMin = () => { //WIP
    
  }
  render() {
    const { currentMinutes, currentSeconds, onStart } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {/* timer */}
        <div class="time-container">
        <div style={{ fontSize: "100px" }}>
          <span>{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}</span>:
          <span>{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}</span>
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
            <button class="time-button" onClick={this.timeRestart}>Restart</button>
          </div>
        )}
      </div>
    );
  }
}
