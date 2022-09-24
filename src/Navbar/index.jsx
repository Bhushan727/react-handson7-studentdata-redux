import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'


const Navbar = () => {
  return (
    <div className='navContainer'>
            <NavLink to='/' className='linkD'><li> Home </li></NavLink>
            <NavLink to='/students'className='linkD' ><li> Students </li></NavLink>
            <NavLink to='/contact' className='linkD'> <li> Contact </li></NavLink>

    </div>
  )
}

export default Navbar