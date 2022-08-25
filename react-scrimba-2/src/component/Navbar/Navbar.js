import React from 'react';
import './Navbar.css';
import logo from './airbnb-logo.png';
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
    </nav>
  )
}