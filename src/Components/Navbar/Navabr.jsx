import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"


function Navabr() {
  let navigate = useNavigate()
  return (
    <div className='navbar'>
      <div className="navcon">
        <span className="logo"><h1 style={{cursor:"pointer"}}  onClick={()=>
        {
navigate('/')
        }}>Booking App</h1></span>
        <div className="navitem">
            <button className="navbutton">List your property</button>
            <button className="navbutton">Register</button>
            <button className="navbutton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navabr
