import React from 'react'
import { useTimer } from 'react-timer-hook'
import { render } from 'react-dom';

export default function Timer({ expiryTimestamp }) {
        const {
          seconds,
          minutes,
          hours,
          days,
          isRunning,
          start,
          pause,
          resume,
          restart,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
        
        return (
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '100px'}}>
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
              </div>
              <p>{isRunning ? 'Running' : 'Not running'}</p>
              <button class="time-button" onClick={start}>Start</button>
              <button class="time-button" onClick={pause}>Pause</button>
              <button class="time-button" onClick={resume}>Resume</button>
              <button class="time-button" onClick={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds()+600);
                restart(time)
              }}>Restart</button>
            </div>
          );
    }
