
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home'
import UseContext from './Context/UseContext';
import ContextProvider from './Context/ContextProvider';
import Projects from './Pages/Projects';
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='custom_container'>
          <div className='container'>
            <div className='side_conent_container_left'>
            <Hero />
            </div>
          <div className='side_content_container_right'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/navbar' element={<Navbar />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/about' element={<About/>}/>

          </Routes>
          </div>
          
          </div>
          
        </div>

      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
