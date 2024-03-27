
import './App.css';
import React,{useState,useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home'
import UseContext from './Context/UseContext';
import ContextProvider from './Context/ContextProvider';
import Projects from './Pages/Projects';
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Side_Nav from './Components/Side_Nav/Side_Nav';
import Contact from './Pages/Contact';
function App() {
  const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || '/');

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  return (
    <ContextProvider>

      <BrowserRouter>

        <div className='custom_container'>
          <div className='navbar'>
            <Navbar />
          </div>

          <div className='container'>
            <div className='side_conent_container_left'>
              <Hero />

            </div>
            <div className='side_content_container_right'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/navbar' element={<Navbar />} />
                <Route path='/project' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/services' element={<Services />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/contact' element={<Contact/>} />
                {/* Define a default route for the root path */}
                <Route path='*' element={<Home />} />
              </Routes>
            </div>

          </div>

        </div>

      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
