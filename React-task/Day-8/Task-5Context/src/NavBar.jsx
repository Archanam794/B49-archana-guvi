import React from 'react'
import { Link, Route } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar">
        <h3>Trends</h3>
        <div className="list">
           
            <Link to='/'>HOME</Link>
            <Link to='/cart'>CART</Link>
           
        </div>
    </div>
  )
}

export default NavBar