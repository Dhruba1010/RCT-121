import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getTodods, get_todos_failure, get_todos_request, get_todos_success } from '../Redux/action';

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodods(dispatch)
  },[])

  return (
    <div>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo