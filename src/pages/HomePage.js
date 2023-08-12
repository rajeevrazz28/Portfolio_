import React, { useState } from 'react';
import Main from '../components/Main';
import Navbar from '../components/navbar/Navbar';
import '../styles/home.css';

const HomePage = () => {
  // States
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  const closeNav = () =>{
   if(nav){
     setNav(false)
   }
  }

  return(
    <div  className='pages'>
        <Navbar nav={nav} handleNav={handleNav} closeNav={closeNav} />
        <Main nav={nav} closeNav={closeNav} handleNav={handleNav} className={nav?'blurr':''}/>
    </div>
  ) 
};

export default HomePage;
