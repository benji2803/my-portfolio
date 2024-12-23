// src/components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import moon and sun icons

function DarkModeToggle() {
  // Retrieve the saved dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  // Apply dark mode styles and save the preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark'); // Add dark mode class to the body
    } else {
      document.body.classList.remove('dark'); // Remove dark mode class
    }

    // Save the current dark mode state to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle dark mode when the button is clicked
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
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
