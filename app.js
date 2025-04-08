import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dinosaurs from './pages/Dinosaurs'; 
import DinosaurMedia from './pages/DinosaurMedia';
import Merch from './pages/Merch'; 
import Contact from './pages/Contact'; 
import NotFound from './pages/NotFound'; 

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
