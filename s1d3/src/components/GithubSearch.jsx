import React, { useState } from 'react';

export const GithubSearch = ({ handleClick }) => {
    const [text, setText] = useState("");

  return (
    <div>
        <input type="text" placeholder="Search Users" value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={() => handleClick(text)}>Search</button>
    </div>
  )
}

