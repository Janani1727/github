import React from 'react'
import "../style/Navbar.css"
import {GoChevronDown} from "react-icons/go"
import {BsGithub} from "react-icons/bs"
const Navbar = () => {
  return (

    <div className='nav'>
        <div className='left'>
            <p><BsGithub size={35}/></p>
            <p>Product <GoChevronDown/> </p> 
            <p>Solutions <GoChevronDown/></p>
            <p>Open Source <GoChevronDown/></p>
            <p>Pricing</p>
        </div>
        <div className='right'>
            <input type="text" placeholder='     Search or jump to...'/>
            <p>Sign in</p>
            <p>Sign up</p>
        </div>
    </div>

  )
}

export default Navbar