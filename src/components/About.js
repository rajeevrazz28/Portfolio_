import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/newpro.png'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 1.5,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>I'm Rajeev Ranjan, a passionate software developer graduated from IIT Patna, and I'm actively seeking opportunities to further enhance my coding skills and collaborate on impactful projects. With a focus on continuous learning, I'm eager to join a team where I can leverage my expertise to drive meaningful outcomes.  </p>
                        <br />
                        <p> I have cultivated a solid foundation in pertinent technologies, alongside equipping myself with essential skills and hands-on experience. My journey through coursework and hands-on ventures at IIT Patna has nurtured my expertise in programming languages, data structures, web development frameworks, operating systems, and databases. My engagement in internships has enabled me to collaborate harmoniously within diverse teams, fostering the development and enhancement of web applications, and in turn, honing my prowess in full-stack development.</p>
                        <br/>
                        <p>
                        Furthermore, my successful completion of various projects has fortified my proficiency. These undertakings encompass crafting dynamic user interfaces and implementing resilient back-end systems, honing my acumen in problem-solving and adeptly addressing intricate challenges. With expertise in diverse technologies such as JavaScript, C++, Python, Node.js, React.js, Express and database technologies, along with a solid foundation in system design, I specialize in developing streamlined systems that simplify processes and enhance user experiences. I am always eager to take on new challenges and collaborate with teams to create impactful and scalable software solutions.
                        </p>
                    </motion.div>
                    <motion.div initial={{x: "300px", opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
