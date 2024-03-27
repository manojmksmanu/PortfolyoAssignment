import React from 'react'
import "./Navbar.css"
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Outlet, Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const [active, setActive] = useState("home")
    const items = ["about", "project", "skills", "services", "testimonials", "contact"];
    // the stagger effect
    const staggerList = stagger(0.1, { startDelay: 0.25 });

    useEffect(() => {
        animate(
            "ul",
            {
                width: open ? 150 : 0,
                height: open ? 350 : 0,
                opacity: open ? 1 : 0
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.4
            }
        );
        animate(
            "li",
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.3, x: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);
    return (
        <>
            <div className="side_nav_page" ref={scope}>
                <motion.div onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
                    <CgMenuRound className='menu' style={{ fontSize: "60px", color: 'white' }} />
                </motion.div>
                <ul className='side_nav_container'>
                    <motion.li>
                        <Link
                            onClick={() => 
                                {
                                    setOpen(!open)
                                    setActive('home')
                                }
                            }
                            to={'/'}
                            className={active === 'home' ? ' active_nav ' : ""}
                        >
                            Home
                        </Link >
                    </motion.li>
                    {items.map((item, index) => (
                        <motion.li key={index}>
                            <Link
                                onClick={() => {
                                    setOpen(!open)
                                    setActive(item)
                                }}
                                to={`/${item}`}
                                className={active === item ? 'active_nav' : ""}
                            >{item}</Link>
                        </motion.li>
                    ))}
                </ul>
                <Outlet />
            </div>
        </>

    )
}

export default Navbar