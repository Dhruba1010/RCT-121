import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { getTodos } from '../Redux/TodoRedux/action';

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    // getTodos(dispatch)
    dispatch(getTodos());
  },[])

  return (
    <div>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo