// App.js - Main Application File
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import './App.css'; // Optional, if you want to keep global styles.

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
