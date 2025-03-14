import React from 'react'
import Logo from './Logo'
import NavLink from './NavLink'

function Header() {
  return (
    <div className='header'>
      <Logo />
      <div className='nav_items'>
        <NavLink />
      </div>
      <div> </div>
    </div>
  )
}

export default Header
