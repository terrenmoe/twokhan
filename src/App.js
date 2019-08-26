import React from 'react';

import logo from './logo.svg';
import Sidebar from './Sidebar.js';
import Navbar from './Navbar.js';
// import Footer from './Footer.js';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="Logo" alt="logo" />
        <h2>2khan.org</h2>
        <Navbar />
      <Sidebar id="left" className="Sidebar" />
      </header>
    </div>
  );
};
