import React from 'react'
import './Pages.css'
import { motion, AnimatePresence } from "framer-motion";
import UseContext from '../Context/UseContext';
const Contact = () => {
    const data = UseContext();
    return (
        <motion.div 
        initial={{ opacity: 0, x: -50 }} // Initial state (invisible and moved up)
        animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
        transition={{ duration: 1 }}
        className='contact'
        >
            <h2 className='pages_title'>Contact </h2>
            <div className='scroll_setting'>
                <div className='contact_adjustcss'>
                <div className='contact_form_container'>
                    <h3>
                        Let's Work Together!
                    </h3>
                    <div>
                        <input placeholder=' Your Name' />
                        <input placeholder=' Your Email' />
                        <input placeholder=' Your Phone Number' />
                        <input placeholder=' Subject ' />
                        <input placeholder=' Tell us about yourself ' />
                        {/* <input placeholder=' Subject ' /> */}
                        <motion.span
                            className='submit_btn'
                            whileTap={{ scale: 0.9 }}
                        >
                            Submit
                        </motion.span>
                    </div>

                </div>
                <div className='details_section'>
                    <div>
                        <p>Name</p>
                        <span>
                            {data && data.user.about.name}
                        </span>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <span>{data && data.user.about.phoneNumber}</span>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <span>
                            {data && data.user.email}
                        </span>
                    </div>
                    <div>
                        <p>Social Network</p>
                        <span className='about_social_links'>
                            {
                                data && data.user.social_handles.map((e) => {
                                    return <>
                                        <a
                                            href={e.url}
                                        >
                                            <img src={e.image.url} />
                                        </a>
                                    </>
                                })
                            }
                        </span>
                    </div>
                </div>
                </div>
               
            </div>

        </motion.div>
    )
}

export default Contact