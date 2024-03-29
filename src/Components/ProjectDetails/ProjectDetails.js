import React from 'react'
import { motion } from "framer-motion";
import './ProjectDetails.css'
const ProjectDetails = ({ projectDetail }) => {
    console.log(projectDetail)
    return (
        <motion.div
            initial={{ scale: 0 }} // Initial state (invisible and moved up)
            animate={{ scale: 1 }} // Animate to visible and original position
            transition={{ duration: 0.25 }}
            className='project_detail'
        >
            <div className='img'>
                <img src={projectDetail.image.url} />
            </div>
            <div className='content'>
                <h5>
                    {projectDetail.description}
                </h5>
                <h4> TechStack : {
                    projectDetail.techStack.map((e) => {
                        return (
                            <span>
                                {e}
                            </span>
                        )
                    })
                }</h4>
            </div>
        </motion.div>
    )
}

export default ProjectDetails