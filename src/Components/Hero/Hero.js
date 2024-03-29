import React from 'react'
import UseContext from '../../Context/UseContext'
import { motion } from "framer-motion";
import './Hero.css'
const Hero = () => {
    const data= UseContext();
  return (
    <div className=''>
        <motion.div 
        initial={{ scale: 0 }} // Initial state (invisible and moved up)
        animate={{ scale: 1 }} // Animate to visible and original position
        transition={{ duration: 0.4 }}
        className='hero_container'
        >
            {
                data && <img src={data.user.about.avatar.url}/>
            }
            <h2>{data && data.user.about.name}</h2>
        </motion.div>
    </div>
  )
}

export default Hero