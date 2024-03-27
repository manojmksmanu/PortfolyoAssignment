import React,{useEffect, useState} from 'react'
import UseContext from '../Context/UseContext'
import Card from '../Components/ProjectCard/Card';
import { motion, AnimatePresence } from "framer-motion";
import './Pages.css'
const Projects = () => {
    const data = UseContext();
    // for modal
    
    // console.log(data.user.projects)
//     const [product ,setProduct]=useState("")
//     useEffect(()=>{
// data && data.user.projects.sort
//     },[])
    return (
        <motion.div 
        initial={{ opacity: 0, x: -50  }} // Initial state (invisible and moved up)
        animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
        transition={{ duration: 1 }}
        className='projects'
        >
           <h1 className='pages_title'>projects</h1>
            <div className='projects_cards_container scroll_setting'>
                {
                    data && data.user.projects.map((e) => {
                    return    <Card img={e.image.url} cardData={e} />
                    })
                
                }
             
            </div>

        </motion.div>
    )
}

export default Projects