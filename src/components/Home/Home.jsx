import React from 'react'
import "./home.css"
import {HiOutlineArrowCircleDown} from 'react-icons/hi';
import ME from "../../assert/me1.png"
import CV from "../../assert/cv.pdf"

const Home = () => {
  return (
    <div id="home">
        <div class="detail">
            <h2>Hi, 👋 I am<br/> <span>Sumit Kumar</span></h2>
            <p>I am a Fullstack web developer with a focus on the MERN stack.
             I have more than 1200 hours of coding experience, working on various projects,
              both as part of a team and as an individual.
               I am passionate about web development and
                am always looking to improve my skills. </p>
            <a href={CV} download={"Sumit-Kumar-Resume"}
                onClick={() =>window.open(CV)}
              >Downdload Resume <HiOutlineArrowCircleDown class="d_icone"/></a>
        </div>
        <div className='container__img'>
            <div className='pro__img'>
                <img src={ME} alt="About" />
            </div>
         </div>
      </div>
    
  )
}

export default Home