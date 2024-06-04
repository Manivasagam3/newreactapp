import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-item' style={{background:"aquamarine"}}>
      <h3 >busses</h3>
        <ul className='nav'>
    <li><Link to='/hero'>Home</Link></li>
    <li><Link to='/login'>login</Link></li>
  </ul>
    </div>
  )
}

export default Navbar
