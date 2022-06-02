import React, { useState } from 'react'

function TodoInput() {
  const [text, setText] = useState('');

  return (
    <div>
        <input value={text} placeholder='Type Something to add' type='text' onChange={e=> setText(e.target.value)} />
        <button>ADD</button>
    </div>
  )
}

export default TodoInput