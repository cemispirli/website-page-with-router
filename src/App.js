import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';



function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer/>

    </BrowserRouter>
     
    </div>
  );
}

export default App;
