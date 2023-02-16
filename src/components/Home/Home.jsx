import React from 'react'
import About from "../About me/About";
import Skill from "../Contacts/Contact";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";
import Navbar from "../Navbar/Navbar"



const Home = () => {
  return (
    <div id="home" >
      <Navbar/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home