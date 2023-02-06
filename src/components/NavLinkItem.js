import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinkItem(props) {
  return (
    <li className="nav-item">
        <NavLink to={props.location} className="nav-link">{props.name}</NavLink>
    </li>
  )
}

export default NavLinkItem