import React, {useState} from 'react';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Slider from './components/Slider/Slider';
import Section from './components/Section/Section';
import CustomOrder from './components/CustomOrder/CustomOrder';
import Footer from './components/Footer/Footer';
import LogInOut from './components/LogInOut/LogInOut';

function App() {

  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(true)

  const closeModalHandle = ():void => {
    setModalIsOpen(false)
  }

  return (
    <div className="App">
        <Header />
        <Slider />
        <Section />
        <CustomOrder />
        <Footer />
        <LogInOut isOpen={modalIsOpen} closeModalHandle={closeModalHandle}/>
    </div>
  );
}

export default App;
