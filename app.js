import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Dinosaurs from './pages/dinosaurs'; 
import DinosaurMedia from './pages/dinosaurMedia';
import Merch from './pages/merch'; 
import Contact from './pages/contact'; 
import NotFound from './pages/notFound'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/dinosaurs" element={<dinosaurs />} />
          <Route path="/media" element={<dinosaurMedia />} />
          <Route path="/merch" element={<merch />} />
          <Route path="/contact" element={<contact />} />
          <Route path="*" element={<notFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
