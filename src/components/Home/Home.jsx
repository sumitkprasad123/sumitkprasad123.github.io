import React from 'react'
import "./home.css"
import {HiOutlineArrowCircleDown} from 'react-icons/hi';
import ME from "../../assert/me1.png"

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
            <a  href="https://drive.google.com/u/0/uc?id=1-CJwYy4RepRckb80rM-2jTfdMVAKdM5T&export=download"
              download={"Sumit-Kumar-resume"}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1-CJwYy4RepRckb80rM-2jTfdMVAKdM5T/view?usp=sharing"
                )
              }>Downdload Resume <HiOutlineArrowCircleDown class="d_icone"/></a>
        </div>
        <div className='container__img'>
          <div className='about__me'>
            <div className='about__me-image'>
                <img src={ME} alt="About" />
            </div>
          </div>
         </div>
      </div>
    
  )
}

export default Home