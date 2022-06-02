import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getTodos } from '../Redux/action';

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch)
  },[])

  return (
    <div>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo