import React from 'react';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import styles from './Timer_Stopwatch.module.css';

export const Header = ({handleClick}) => {

  return (
    <div className={styles.head}>
        <div className={styles.head_timer} onClick={handleClick} >
            <div><TimelapseOutlinedIcon /></div>
            <div>Timer</div>
        </div>
        <div className={styles.head_timer} onClick={handleClick}>
            <div><TimerOutlinedIcon /></div>
            <div>Stopwatch</div>
        </div>
    </div>
  )
}

