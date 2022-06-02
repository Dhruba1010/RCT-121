import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos, getTodos } from '../Redux/action';

function TodoInput() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodos({
      title : text,
      dispatch
    })
    .then(() => {
      getTodos(dispatch);
    })
  }

  return (
    <div>
        <input value={text} placeholder='Type Something to add' type='text' onChange={e=> setText(e.target.value)} />
        <button onClick={handleAddTodo}>ADD</button>
    </div>
  )
}

export default TodoInput