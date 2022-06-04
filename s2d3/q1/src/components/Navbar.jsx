import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display : 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem', marginTop: '1rem'}}>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
    </nav>
  )
}

export default Navbar