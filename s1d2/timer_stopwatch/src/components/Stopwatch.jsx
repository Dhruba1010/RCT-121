import React, { useState, useEffect } from 'react';
import styles from './Timer_Stopwatch.module.css'

export const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(true);
    // const [show]

    var id;
    useEffect (() => {
        if(start === false){
            id = setInterval( () => {
                setTimer(pre => pre+1)
            },10)
        }
        
        return () => {
            clearInterval(id);
        }
    })

    

    const handleStart = () => {
        setStart(!start);
    }

    const handleStop = () => {
        clearInterval(id);
        setTimer(0);
    }

  return (
    <div className={styles.stopwatch}>
        <div className={styles.stopwatchWatch}>
            <div><h1>{Math.round(timer/100)}</h1></div>
            <div><h4>S</h4></div>
            <div>{'  '}</div>
            <div><h3>{timer%100}</h3></div>
        </div>
        <div>
            {start ? (<button onClick={handleStart}>START</button>) : (<button onClick={handleStart}>STOP</button>)}
            
            <button onClick={handleStop}>RESET</button>
        </div>
    </div>
  )
}

