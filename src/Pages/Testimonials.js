import React, { useState, useEffect, useRef, useCallback } from 'react'
import UseContext from '../Context/UseContext'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import 'swiper/css';

const Testimonials = () => {

    const data = UseContext();
    const [testimonial, setTestimonial] = useState();

    useEffect(() => {
        data && setTestimonial(data.user.testimonials.filter(item => item.enabled === true))
    }, [data])

    return (
        <motion.div
        initial={{ opacity: 0, x: -50  }} // Initial state (invisible and moved up)
        animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
        transition={{ duration: 1 }}
         className='testimonials'
         >
            <h2 className='pages_title'>
                Testimonials
            </h2>

            <div className='testimonial_container'>

                <Swiper
                    // slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}

                    className="mySwiper"
                >
                    {
                        testimonial && testimonial.map((e, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='testimonial_box'>
                                        <div className='testimonial_img'>
                                            <img src={e.image.url} />
                                        </div>
                                        <div className='testimonial_content'>
                                            <h3>{e.name}</h3>
                                            <h3>{e.position}</h3>
                                            <h6>{e.review}</h6>

                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>


            </div>

        </motion.div>
    )
}

export default Testimonials