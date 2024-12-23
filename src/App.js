// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import { FaMoon, FaSun } from 'react-icons/fa'; // Optional: For icon toggle

import './styles/App.css'; // Import your global styles (which include dark mode styles)

function App() {
  // State to store the dark mode status
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  // Apply dark mode styles globally and save the setting to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Save the current dark mode state in localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Header />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Dark Mode Toggle */}
      <Home />
      <Experience />
      <Contact />
    </div>
  );
}

// Dark Mode Toggle Button
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(prevMode => !prevMode)}
      style={{
        fontSize: '24px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px',
        margin: '20px',
      }}
    >
      {darkMode ? <FaSun /> : <FaMoon />} {/* Toggle between sun and moon icons */}
    </button>
  );
}

export default App;
