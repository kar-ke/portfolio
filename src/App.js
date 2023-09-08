import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
