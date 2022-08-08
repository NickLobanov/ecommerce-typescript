import React from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Slider from './components/Slider/Slider';
import Section from './components/Section/Section';
import CustomOrder from './components/CustomOrder/CustomOrder';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Section />
        <CustomOrder />
    </div>
  );
}

export default App;
