import React, { Component } from "react";
import { render } from "react-dom";

export default class Timer extends Component {
  state = {
      minutes: 1,
      seconds: 0,
      currentMinutes: 0,
      currentSeconds: 0,
      onStart: false,
      isRunning: false,
      tasks: []
    };


  startCountdown = () => { //starts the countdown officially, showing the buttons to modify
    this.setState({ onStart: true });
    this.timestart();
    this.setState(({currentMinutes: this.state.minutes})) // set the current minutes to the time it is now.
    
  };

  timestart = () => {  //starts the countdown timer
    this.setState({isRunning: true});
    if(this.state.isRunning === false){
    this.myInterval = setInterval(() => {
      const { currentSeconds, currentMinutes} = this.state;
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
    const {currentSeconds, currentMinutes} = this.state;
    this.setState(({
      onStart:false,
      currentSeconds: this.state.seconds,
      currentMinutes: this.state.minutes
    }));
  }

  increaseMin = () => { //WIP
    this.setState(({minutes}) => ({
      minutes: minutes + 1,
    }))
  }

  decreaseMin = () => {
    if(this.state.minutes > 0){
      this.setState(({minutes}) => ({
      minutes: minutes - 1,
    }))
    }

  }
  render() {
    const { minutes, seconds, currentMinutes, currentSeconds, onStart, isRunning } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <div className="time-container">
        {/* timer */}
        {onStart ? (
        <div style={{ fontSize: "100px" }}>
          <span>{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}</span>:
          <span>{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}</span>
        </div>
        ) : (
         <div style={{ fontSize: "100px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        )}
        {/* arrows */}
        {onStart? (<div>
        </div>) : (        
        <div className="timer-buttons">
          <button className="timer-button" onClick={this.increaseMin}>+</button>
          <button className="timer-button" onClick={this.decreaseMin}>-</button>
        </div>)}
        </div>
        {/* buttons */}
        {!onStart ? (
          <button className="start-button" onClick={this.startCountdown}>START TIMER</button>
        ) : (
          <div>
            <button className="time-button" onClick={this.timepause}>Pause</button>
            <button className="time-button" onClick={this.timestart}>Resume</button>
            <button className="time-button" onClick={this.timeRestart}>Restart</button>
          </div>
        )}
        {isRunning ? <div>timer is currently running</div> : <div>timer is currently paused</div>}
        
        </div>
    );
  }
}
