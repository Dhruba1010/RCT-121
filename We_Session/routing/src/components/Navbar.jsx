import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display : 'flex', gap: '2rem', justifyContent: 'center'}}>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Navbar