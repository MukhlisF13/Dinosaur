import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Dinosaurs from './Dinosaurs';
import DinosaurMedia from './DinosaurMedia';
import Merch from './Merch';
import Contact from './Contact';
import NotFound from './NotFound';

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
