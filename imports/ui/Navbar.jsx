// Navbar.jsx
import React from 'react';
import './styles/Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="branding">RMC</div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="extraItems">
        <btn> Departments </btn>
      </div>
    </nav>
  );
};
