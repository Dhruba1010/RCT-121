import React, { useState } from 'react';
import styles from './ContactCard.module.css';

export const ContactCard = ({id, avatar, first_name, last_name, email, phone}) => {
  const [number, setNumber] = useState(false);

  const handleClick = () => {
    setNumber(!number);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
        <div className={styles.image}><img src={avatar} alt="avatar" /></div>
        <div className={styles.details}>
            <div className={styles.header}>
                <h3>{first_name} {" "} {last_name}</h3>
            </div>
            <div>
                {email}
            </div>
            {number ? <div>{phone}</div> : <div></div>}
        </div>
    </div>
  )
}

