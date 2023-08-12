import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Softwere Development</p>
                        <p className='services-desc'>I develop tailored software solutions for businesses and users, utilizing a wide range of languages and methodologies to ensure robustness, efficiency, and scalability. </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'> Full Stack Development</p>
                        <p className='services-desc'>I create seamless web applications, handling both frontend and backend development, using a comprehensive range of technologies.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
