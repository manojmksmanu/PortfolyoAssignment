import React, { useState, useEffect } from 'react'
import './Pages.css'
import UseContext from '../Context/UseContext';
import { motion } from 'framer-motion';
const Skills = () => {
    const data = UseContext();
    const [skills, setSkills] = useState();

    useEffect(() => {
        data && setSkills(data.user.skills.filter(item => item.enabled === true))
    }, [data])

    return (
        <motion.div 
        className='skills'
        style={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.4}}
        >
            <h2 className='pages_title'>
                Skills
            </h2>
            <div className='scroll_setting'>
                <div className='skill_container'>
                    {
                        skills && skills.map((e, index) => {
                            return (
                                <div className='s' >
                                    <img src={e.image.url} />
                                    {/* Line with Framer Motion */}
                                    <motion.div
                                        className="line"
                                        style={{
                                            width: `${100}%`,
                                            background: `linear-gradient(to right, #56e2a4 ${0}%, white ${0}%)`,
                                        }}
                                        animate={{ background: `linear-gradient(to right, #56e2a4 ${e.percentage}%, white ${e.percentage}%)`, }}
                                        transition={{ duration: 0.9, delay: 0.3 }}
                                    />
                                    <div className='skill_tag'>
                                        {/* <h6>
                                            {
                                                e.name
                                            }
                                        </h6> */}
                                        <motion.span
                                            style={{ opacity: 0 }}
                                            animate={{ opacity: 0.9 }}
                                            transition={{ duration: 0.9, delay: 0.3 }}
                                        >
                                            {
                                                e.percentage
                                            }%
                                        </motion.span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Skills