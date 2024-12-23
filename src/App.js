// src/App.js
import React from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import DarkModeToggle from './components/DarkModeToggle'; // Import the DarkModeToggle component

import './styles/App.css'; // Import your global styles (which include dark mode styles)

function App() {
  return (
    <div className="App">
      <Header />
      <DarkModeToggle /> {/* Add the DarkModeToggle component here */}
      <Home />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
