import React from 'react'
import './Side_Nav.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const Side_Nav = () => {
    return (
        <div className='side_nav_container'>
            <ul>
                <li>
                    <FaHome style={{fontSize:"50px"}} />
                </li>
                <li>
                    <IoPersonSharp style={{fontSize:"50px"}}  />
                </li>
                <li>
                    <MdOutlineDesignServices style={{fontSize:"50px"}}  />
                </li>
            </ul>
        </div>
    )
}

export default Side_Nav