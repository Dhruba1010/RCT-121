import React from 'react';

export const GithubCard = ( {avatar_url, login}) => {
  return (
    <div>
      <img src={avatar_url} height="100px" alt="avatar" />
      <p>{login}</p>
    </div>
  )
}
