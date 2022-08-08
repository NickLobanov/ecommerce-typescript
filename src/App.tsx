import React from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Slider from './components/Slider/Slider';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Section />
    </div>
  );
}

export default App;
