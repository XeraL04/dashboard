import React from 'react'
import logo from '../../assets/img/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='wrapper'>

        <div className='logo'>
          <img src={logo} alt="" className='the-logo'/>        
        </div>
    
        <ul className='nav-links'>

          <li><a href="/">Home</a></li>
          <li><a href="/employee">Employee</a></li>
          <li><a href="/attendance">Attendance</a></li>
        
        </ul>
      </div>
    </nav>
  )
}

export default Navbar