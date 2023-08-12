import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import "../styles/main.css"
import Services from './Services';
import Skills from './Skills';
import Works from './Works';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className={nav ? 'blur-content' : 'main'}>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <div className='break'>
          <br/>
        </div>
        <Skills />
        <div className='break'>
          <br/>
        </div>
        
        <Services />
        <div className='break'>
          <br/>
        </div>
        <Works />
        <div className='break'>
          <br/>
        </div>
        <Contact />
    </div>
  )
};

export default Main;
