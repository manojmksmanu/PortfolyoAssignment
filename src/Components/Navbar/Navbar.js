import React from 'react'
import { FaHome } from "react-icons/fa";
import "./Navbar.css"
import { IoPersonSharp } from "react-icons/io5";
// import { FaHome } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
const Navbar = () => {
    return (
      <>
      
      
      
      <div className='side_nav'>
<div>
    <ul>
        <li>
        <FaHome />
        </li>
        <li>
        <IoPersonSharp /> 
        </li>
        <li>
        <MdOutlineDesignServices />
        </li>
    </ul>
</div>
      </div>
      </>

    )
}

export default Navbar