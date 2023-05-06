import React from 'react'
import {Link} from "react-router-dom"
import pic from '../../images/profilepic.png'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
        <Link to="/" className="link">
        <div className="logo">Movie App</div>
        </Link>
       
        <div className="user-image">
            <img src={pic} alt="" />
        </div>

    </div>
  )
}

export default Header