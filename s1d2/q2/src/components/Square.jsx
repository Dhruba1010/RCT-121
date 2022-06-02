import React from 'react';
import './Tic-Tac-Toe.css';

export const Square = ({ title, onClick }) => {

  const style = title ? `squares ${title}` : `squares`;
  return (
        <button className={style} onClick = {onClick}>
            {title}
        </button>
  )
}

