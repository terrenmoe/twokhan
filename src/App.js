import React from 'react';

import logo from './logo.svg';
// import Sidebar from './Sidebar.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Avatar from './Avatar.js';
import Main from './Main.js';

import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logo} className="Logo" alt="logo" />
        <h2>2khan.org</h2>
        <Navbar />
      </header>
      <Main>
        <Avatar></Avatar>
      </Main>
      <Footer></Footer>
    </div>
  );
};
