import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dinosaurs from './pages/AllDinosaurs';
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
