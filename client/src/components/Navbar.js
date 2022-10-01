import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
        <img src={logo} alt='logo'/>
        </div>
        <div className='links'>links</div>
      </div>
    </div>
  )
}

export default Navbar