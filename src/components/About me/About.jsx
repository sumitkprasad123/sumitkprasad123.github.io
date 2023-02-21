import React from 'react'
import "./about.css"
import {ImGithub,ImLinkedin,ImMail3 } from 'react-icons/im';

const About = () => {
  return (
    <div  id="about" className="about section" >
       <div className='about__container'>
          <div className='box1'>
              <div className='box11'>
                  <h3>Personal Details</h3>
              </div>
              <div className='box12'>
                  <p><b>Email :</b> sumitkprasad123@gmail.com</p>
                  <p><b>Language :</b> English</p>
                  <p><b>Nationality :</b> Indian</p>
              </div>        
              <div className='box13'>
                <p>
                  <ImGithub className='about_icone'/>
                  <ImLinkedin className='about_icone'/>
                  <ImMail3 className='about_icone'/>
                </p>
              </div>
          </div>

          <div className='box2'>
             <h2>I am <span className='highlight'>Full Stack Web Developer</span></h2>
             <p>My name is Sumit Kumar, I am from<span className='highlight_text'> Ranchi , Jharkhand.</span> I have knowledge in<span className='highlight_text'> HTML, CSS, Javascript, REACT, Redux, Chakra-Ui</span> and i make user-friendly websites.
               Passionate Web Developer with skills in the MERN stack.
               I'm skilful in problem-solving and building new things using technology. 
              I look forward to joining a company where I can contribute to individual and company growth..</p>
          </div>
       </div>
    </div>
  )
}

export default About