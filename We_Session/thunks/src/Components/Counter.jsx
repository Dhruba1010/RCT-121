import React from 'react';
import { increamentCount, decrementCount } from "../Redux/CounterRedux/action";

import { useDispatch, useSelector } from "react-redux";


function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.count);

  return (
    <div>
        <div><h1>Count : {counter}</h1></div>
        <button onClick={() => dispatch(increamentCount(1))}>ADD</button>
        <button onClick={() => dispatch(decrementCount(1))}>REDUCE</button>
    </div>
  )
}

export default Counter;