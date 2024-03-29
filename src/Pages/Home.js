import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'
import { motion } from 'framer-motion';
const Home = () => {
    const data = UseContext();
    return (
        <motion.div
            initial={{ opacity: 0, x: -50  }} // Initial state (invisible and moved up)
            animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 1 }} // Animation duration
            className='home'
        >
            <span className='home_circle'>

            </span>
            <h1>{data && data.user.about.name}</h1>
            <h3>
                {
                    data && data.user.about.title
                }
            </h3>
            <h4>
                {
                    data && data.user.about.subTitle
                }
            </h4>
            <h5>
                "{
                    data && data.user.about.quote
                }"
            </h5>

        </motion.div>
    )
}

export default Home