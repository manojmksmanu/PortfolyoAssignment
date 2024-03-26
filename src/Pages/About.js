import React,{useState} from 'react'
import UseContext from '../Context/UseContext'
// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
// import { FaInstagram } from "react-icons/fa6";
const About = () => {
    const data = UseContext();
    const [selectedTab, setSelectedTab] = useState('');
    return (
        <div className='about'>
            <h1 className='pages_title'>About Me</h1>
            {/* <h2>
                Hello! I am {data && data.user.about.name} a {data && data.user.about.title}
            </h2> */}
            <div className='scroll_setting'>

                <div>
                    <h3>
                        {data && data.user.about.subTitle}
                    </h3>
                    <h3 className='description'>
                        {
                            data && data.user.about.description
                        }
                    </h3>
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
                                {data && data.user.about.phoneNumber}
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

                {/* //for education and experience */}
                <div>
                    <div className="window">
                        <nav>
                            <ul>
                                <li
                                    className={'Education' === selectedTab ? "selected" : ""}
                                    onClick={() => setSelectedTab('Education')}
                                >
                                    Education
                                    {
                                        'Education' === selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null
                                    }
                                </li>
                                <li
                                    className={'Experience' === selectedTab ? "selected" : ""}
                                    onClick={() => setSelectedTab('Experience')}
                                >
                                    Experience
                                    {
                                        'Experience'=== selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null
                                    }
                                </li>
                                {/* {tabs.map((item) => (
                                    <li
                                        key={item.label}
                                        className={item === selectedTab ? "selected" : ""}
                                        onClick={() => setSelectedTab(item)}
                                    >
                                        {`${item.icon} ${item.label}`}
                                        {item === selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null}
                                    </li>
                                ))} */}
                            </ul>
                        </nav>
                        <main>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTab ? selectedTab.label : "empty"}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {selectedTab === 'Experience' ? <Experience/> : <Education/>}
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default About