import React from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import DarkModeToggle from './components/DarkModeToggle'; // Import DarkModeToggle component

import './styles/App.css'; // Import the global styles, including dark mode styles

function App() {
  return (
    <div className="App">
      <Header />
      <DarkModeToggle /> {/* Add the DarkModeToggle here to allow users to toggle dark/light mode */}
      <Home />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
