import React from 'react'

export const GithubCard = ( {id, avatar_url, login}) => {
  return (
    <div>
      <img src={avatar_url} height="100px" alt="avatar" />
      <p>{login}</p>
    </div>
  )
}

