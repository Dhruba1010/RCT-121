import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector(store=> store.todos.todos);
  const loading = useSelector(store=> store.todos.loading);
  const error = useSelector(store=> store.todos.error);

  return (
    <div>
      <h2>Todo List</h2>
      {loading && <div>...loading</div>}
      {error && <div>Something went wrong!</div>}
      {todos?.map(t=> (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  )
}

export default TodoList