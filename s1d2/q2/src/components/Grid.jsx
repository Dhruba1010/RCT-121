import React from 'react';
import { Square } from './Square';

export const Grid = ({ squares, onClick }) => {
  return (
    <div className='grid'>
        {squares?.map((square,i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
  )
}

