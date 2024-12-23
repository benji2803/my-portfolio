// src/components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Optional: For icon toggle

function DarkModeToggle() {
  // Check if dark mode is already saved in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  // Apply dark mode styles
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Save dark mode state to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prevMode => !prevMode)}
      style={{
        fontSize: '24px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px',
        margin: '20px'
      }}
    >
      {darkMode ? <FaSun /> : <FaMoon />} {/* Change the icon based on the mode */}
    </button>
  );
}

export default DarkModeToggle;
