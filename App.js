import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dinosaurs from './pages/Dinosaurs'; 
import DinosaurMedia from './pages/DinosaurMedia';
import Merch from './pages/Nerch'; 
import Contact from './pages/Contact'; 
import NotFound from './pages/NotFound'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dinosaurs" element={<Dinosaurs />} />
          <Route path="/Media" element={<DinosaurMedia />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
