import React, { useState, useEffect } from 'react';
import styles from './Timer_Stopwatch.module.css'

export const Timer = () => {
  const [start, setStart] = useState(true);
  const [input, setInput] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(input);
  
  var timer;

  useEffect(() => {
    if(start === false) {
      timer = setInterval(() => {
        setSec(sec-1);

        if(sec===0){
          setSec(59);
          setMin(min-1);
        }

        if(sec===0 && min===0){
          setSec(0);
          setMin(0);
        }

        if(min===0){
          setMin(0);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    }
  })


  const handleInput = (i) => {
    setInput(+i.target.value);
  }

  const handleStart = () => {
    setMin(input);
    setSec(0);
    setStart(!start);
  }

  const handleStop = () => {
    clearInterval(timer);
    setStart(!start)
  }

  const handleReset = () => {
    setSec(0);
    setMin(0);
    clearInterval(timer);
  }

  return (
    <div className={styles.timer}>
      <div>
        <h1>Timer</h1>
      </div>
      <div>
        <h1>
          {min<10 ? "0"+min : min} : {" "}
          {sec<10 ? "0"+sec : sec}
        </h1>
      </div>
      <div>
        <input type="text" 
          placeholder="Enter Time"
          onChange={handleInput}
        />
        {start ? (<button onClick={handleStart}>START</button>) : (<button onClick={handleStop}>STOP</button>)   }
        
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}



