
import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home'
import ContextProvider from './Context/ContextProvider';
import Projects from './Pages/Projects';
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Animated from './Components/AnimatedBg/Animated';
import PageLoad from './Components/PageLoad/PageLoad';
import { motion } from "framer-motion";
function App() {
  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || '/');

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='custom_container'>
          <motion.div
            initial={{ scale: 1 }} // Initial state (invisible and moved up)
            animate={{ scale: 0 }} // Animate to visible and original position
            transition={{ delay: 0, duration: 1.5 }}
            className='page_load'
          >
            <PageLoad />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }} // Initial state (invisible and moved up)
            animate={{ scale: 1 }} // Animate to visible and original position
            transition={{ delay: 1.5, duration: 0.25 }}
            className='navbar'
          >
              <Navbar />

          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} // Initial state (invisible and moved up)
            animate={{ opacity: 1 }} // Animate to visible and original position
            transition={{ delay: 1.5, duration: 0.25 }}
            className='animation'
          >
              <Animated />

          </motion.div>
          <div className='container'>
            <motion.div
              initial={{ scale: 0 }} // Initial state (invisible and moved up)
              animate={{ scale: 1 }} // Animate to visible and original position
              transition={{ delay: 1.5, duration: 0.25 }}
              className='side_conent_container_left'
            >
                <Hero />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }} // Initial state (invisible and moved up)
              animate={{ scale: 1 }} // Animate to visible and original position
              transition={{ delay: 1.5, duration: 0.25 }}
              className='side_content_container_right'
            >
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/navbar' element={<Navbar />} />
                  <Route path='/project' element={<Projects />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/skills' element={<Skills />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/testimonials' element={<Testimonials />} />
                  <Route path='/contact' element={<Contact />} />
                  {/* Define a default route for the root path */}
                  <Route path='*' element={<Home />} />
                </Routes>

            </motion.div>
          </div>
        </div>
      </BrowserRouter>
    </ContextProvider>

  );
}


export default App;
