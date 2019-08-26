import React from 'react';
import logo from './logo.svg';
import Sidebar from './Sidebar.js';
import  from './.js';
import './App.css';

export default function App() {
  return (
    <div className="App">

      <Sidebar id="left" className="Sidebar">
        <img src={logo} className="Logo" alt="logo" />
        2khan.org
      </Sidebar>
    </div>
  );
};
