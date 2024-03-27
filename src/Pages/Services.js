import React, { useState, useEffect } from 'react'
import UseContext from '../Context/UseContext';
import { motion, AnimatePresence } from "framer-motion";
import './Pages.css'
const Services = () => {
    const data = UseContext();
    const [service, setServices] = useState();
    useEffect(() => {
        data && setServices(data.user.services.filter(item => item.enabled === true))
    }, [data])
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }} // Initial state (invisible and moved up)
            animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
            transition={{ duration: 1 }}
            className='services'
        >
            <h2 className='pages_title'>
                Services
            </h2>
            <div className='scroll_setting'>
                <div className='services_container'>
                    {
                        service && service.map((e) => {
                            return (
                                <div className='service_box'>
                                    < div className='service_image'>
                                        <img src={e.image.url} />
                                    </div>
                                    <div className='service_content'>
                                        <h5>
                                            {e.name}
                                        </h5>
                                        <h6>
                                            {e.desc}
                                        </h6>
                                        <span>
                                            {e.charge}
                                        </span>
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

export default Services