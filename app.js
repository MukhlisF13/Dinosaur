import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Dinosaurs from './dinosaurs';
import Media from './media';
import Merch from './merch';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dinosaurs" element={<Dinosaurs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
