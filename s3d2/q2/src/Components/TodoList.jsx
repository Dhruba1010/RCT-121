import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector(store=> store.todos)
  return (
    <div>
      <h2>Todo List</h2>
      {todos?.map(t=> (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  )
}

export default TodoList