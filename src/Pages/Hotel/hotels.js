import React from 'react'
import Navbar from "../../Components/Navbar/Navabr"
import Header from "../../Components/header/header"
import Search from '../../Components/Searchhome/search'
import './extrahome.css'
import Homelist from '../../Components/Homelist/homelist'
import { useLocation } from 'react-router-dom'

function Hotels() {
  
  return (
    <div>
     <Navbar/>
    <Header type="list"/>
    <div className='Searchhotels'>
      <div className='seachandhotel'>
      <Search/>
      <Homelist/>
      </div>
    </div>

  
    </div>
  )
}

export default Hotels
