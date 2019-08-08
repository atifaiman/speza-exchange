import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class Timer extends Component {
    

    state = {
    };
    
  
    render() {
        const renderer = ({  seconds }) => {
              return (
                <span>
                  {seconds}
                </span>
              );
          };
      return ( 
          <span style={{color: 'red'}}>
            <Countdown date={Date.now() + 60000} 
            renderer={renderer}
            autoStart= {true}
            />
            </span>
      );
    } 
  }



export default Timer;