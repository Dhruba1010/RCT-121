import React from 'react';

export const Square = ({ title, onClick }) => {

  return (
    <div>
        <button onClick = {onClick}>
            {title}
        </button>
    </div>
  )
}

