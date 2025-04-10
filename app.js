import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

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
          <Route path="/" element={<Home />} />
          <Route path="/dinosaurs" element={<Dinosaurs />} />
          <Route path="/media" element={<DinosaurMedia />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
