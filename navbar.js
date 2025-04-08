// navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="nav-container">
        <NavLink to="/" className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }>
          Home
        </NavLink>
        <NavLink to="/dinosaurs" className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }>
          All Dinosaurs
        </NavLink>
        <NavLink to="/media" className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }>
          Dinosaur Media
        </NavLink>
        <NavLink to="/merch" className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }>
          Merch
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => 
          isActive ? 'nav-link active' : 'nav-link'
        }>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
