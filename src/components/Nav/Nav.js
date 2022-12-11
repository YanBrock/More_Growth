import { Link } from 'gatsby'
import React from 'react'
import './Nav.scss'

export default function Nav() {
  return (
    <nav>
        <Link to='/' className="link">Home</Link>
        <Link to='/development' className="link">About</Link>
        <Link to='/development' className="link">Contact</Link>
    </nav>
  )
}
