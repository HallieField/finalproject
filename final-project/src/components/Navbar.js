import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">The Finer Things Book Club</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/favorites" className="navbar-link">Favorites</Link>
        <Link to="/bookclubsignup" className="navbar-link">Join Book Club</Link>
      </div>
    </div>
  );
};

export default Navbar;