import React,{ useState } from 'react';
import { calculateWinner } from './CalculateWinner';
import { Grid } from './Grid';

export const Game = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [step, setStep] = useState(0);
    const [isX, setIsX] = useState(true);
    const winner = calculateWinner(data[step]);
    const xO = isX ? "X" : "O";

    const handleClick = (i) => {
        const history = data.slice(0, step+1);
        const current = history[step];
        const squares = [...current];

        if(winner || squares[i]){
            return;
        }
        squares[i] = xO;
        setData([...history, squares]);
        setStep(history.length);
        setIsX(!isX);
    }

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Grid  squares={data[step]} onClick={handleClick}/>
        <h3>{winner ? "Winner" + winner : "Next Player" + xO}</h3>
    </div>
  )
}

