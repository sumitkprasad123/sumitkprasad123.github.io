import React from 'react'
import "./project.css"
import IMG3 from "../../assert/project1.jpg"
import IMG1 from "../../assert/project2.jpg"
import IMG2 from "../../assert/project3.jpg"
import ICONE from "../../assert/iconeBoot.jpg"
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <div id="projects">
       <h1>Projects</h1>
       <div id="project__main__container">
      
       {/* first Project here */}
       <div className='projec__container' class="project-card">
           <div className='pro__image'>
              <img src={IMG1} alt="img1" />
           </div>
           <div className='pro__discrip'>
               <h3 class="project-title">Bluemercury Clone</h3>
               <p class="project-description">
                  Bluemercury.com is a leading luxury beauty retailer offering the
                  best of cosmetics, skincare, makeup, perfume, hair, bath, and
                  body products.
              </p>
              <div  class="project-tech-stack" style={{ display: "flex", gap: "8px", margin: "10px" }}>
                    <img
                      style={{ width: "35px" }}
                      src="https://img.icons8.com/color/48/null/html-5--v1.png"
                      alt="html"
                    />
                    <img
                      style={{ width: "35px" }}
                      src="https://img.icons8.com/fluency/48/null/css3.png"
                      alt="css"
                    />
                    <img
                      style={{ width: "35px" }}
                      src="https://img.icons8.com/fluency/48/null/javascript.png"
                        alt="js"
                    />
              </div>
              <div className='btn__container'>
                 <a class="project-github-link" rel="noreferrer" href="https://github.com/ignitinsharma/bluemercury_clone" className='btn' target="_blank">Github<AiOutlineGithub className='d_icone' /></a>
                 <a class="project-deployed-link" rel="noreferrer" href="https://celebrated-bonbon-67bbfd.netlify.app" className='btn' target="_blank">Deployed Url<FiExternalLink className='d_icone'/></a>
              </div> 
           </div>
       </div>



        {/* Second Project here */}
       <div className='projec__container'>
           <div className='pro__image'>
               <img className='image' src={IMG2} alt="img2" />
           </div>
           <div className='pro__discrip'>
           <h3>Google Digital Garage Clone</h3>
           <p>Google Digital Garage was created by Google in 2015 as a nonprofit
               program designed to help people improve their digital skills.
               It offers free training, courses and certifications via an online learning platform.
           </p>
            <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
                  <img
                    style={{ width: "35px" }}
                    src="https://img.icons8.com/color/48/null/html-5--v1.png"
                    alt="html"
                  />
                  <img
                    style={{ width: "35px" }}
                    src="https://img.icons8.com/fluency/48/null/css3.png"
                    alt="css"
                  />
                  <img
                    style={{ width: "35px" }}
                    src="https://img.icons8.com/fluency/48/null/javascript.png"
                      alt="js"
                  />
                    <img
                      style={{ width: "35px" }}
                      src={ICONE}
                      alt="bootstrip"
                />
            </div>

            <div className='btn__container'>
                 <a rel="noreferrer" href="https://github.com/imrangadwal10/zonked-instrument-5361" className='btn' target="_blank">Github<AiOutlineGithub className='d_icone' /></a>
                 <a rel="noreferrer" href="https://sage-profiterole-40defe.netlify.app" className='btn' target="_blank">Deployed Url<FiExternalLink className='d_icone'/></a>             
            </div> 
           </div>
       </div>



       {/* third Project here */}
       <div className='projec__container'>
           <div className='pro__image'>
               <img src={IMG3} alt="img3" />
           </div>
           <div className='pro__discrip'>
          <h3>Buy.com</h3>
          <p>
              Buy.com is a clone of SHOP.COM. It is a ecommerce website which offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more. 
          </p>
              <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
              <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/html-5--v1.png"
                  alt="html"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/css3.png"
                  alt="css"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/javascript.png"
                    alt="js"
                />
                <img
                   style={{ width: "35px" }}
                   src="https://img.icons8.com/color/48/null/react-native.png"
                   alt="react"
                  />
                <img 
                   style={{ width: "35px" }}
                   src="https://img.icons8.com/color/48/null/chakra-ui.png"
                   alt="chakraUI"
                   />
              </div>
              <div className='btn__container'>
                 <a rel="noreferrer" href="https://github.com/sumitkprasad123/parched-vessel-5358/tree/main/cool" className='btn' target="_blank">Github<AiOutlineGithub className='d_icone' /></a>
                 <a rel="noreferrer" href="https://cool-phi.vercel.app/" className='btn' target="_blank">Deployed Url<FiExternalLink className='d_icone'/></a>
              </div> 
           </div>
       </div>



       {/* forth Project here */}
       <div className='projec__container'>
           <div className='pro__image'>
               <img src={IMG3} alt="img3" />
           </div>
           <div className='pro__discrip'>
          <h3>Buy.com</h3>
          <p>
              Buy.com is a clone of SHOP.COM. It is a ecommerce website which offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more. 
          </p>
              <div style={{ display: "flex", gap: "8px", margin: "10px" }}>
              <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/color/48/null/html-5--v1.png"
                  alt="html"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/css3.png"
                  alt="css"
                />
                <img
                  style={{ width: "35px" }}
                  src="https://img.icons8.com/fluency/48/null/javascript.png"
                    alt="js"
                />
                <img
                   style={{ width: "35px" }}
                   src="https://img.icons8.com/color/48/null/react-native.png"
                   alt="react"
                  />
                <img 
                   style={{ width: "35px" }}
                   src="https://img.icons8.com/color/48/null/chakra-ui.png"
                   alt="chakraUI"
                   />
              </div>
              <div className='btn__container'>
                 <a rel="noreferrer" href="https://github.com/sumitkprasad123/parched-vessel-5358/tree/main/cool" className='btn' target="_blank">Github<AiOutlineGithub className='d_icone' /></a>
                 <a rel="noreferrer" href="https://cool-phi.vercel.app/" className='btn' target="_blank">Deployed Url<FiExternalLink className='d_icone'/></a>
              </div> 
           </div>
       </div>

       </div>
    </div>
  )
}

export default Project