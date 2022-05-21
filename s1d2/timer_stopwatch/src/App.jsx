import React, { useState } from 'react';
import styles from './components/Timer_Stopwatch.module.css'
import { Header } from './components/Header';
import { Stopwatch } from './components/Stopwatch';
import { Timer } from './components/Timer';




function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className={styles.app}>
      <Header handleClick={handleClick}/>
      {show ? (<Timer />) : (<Stopwatch />)}
    </div>
  );
}

export default App;
