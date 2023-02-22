import React from 'react'
import "./skill.css"

const Skill = () => {
  return (
    <div  id="skills">
        <h1>Skills</h1>
        <div className='skill__container_main'>
          {/* Frontend Logo */}
          <div className='skill__container'>
             <h3>Frontend Development</h3>
             <div className='skills__logo'>
                <div className='frontend' class="skills-card">

                    <article className='skills__details'>
                        <img class="skills-card-img"
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/html-5--v1.png" alt="html"
                        />
                        <p class="skills-card-name">Html 5</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                        style={{ width: "35px", height: "35px" }}
                        src="https://img.icons8.com/plasticine/100/null/react.png" alt="react"
                        />
                        <p>React</p>        
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/css3.png" alt="css"
                        />
                        <p>Css</p>         
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/redux.png" alt="redux"
                        />
                        <p>Redux</p>        
                    </article>  
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/javascript.png" alt="javascript"
                        />
                        <p>JavaScript</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/chakra-ui.png" alt="chakra"
                        />
                        <p>Chakra UI</p>        
                    </article>
                </div>
             </div>
          </div>
          {/* Backend Logo */}
          <div className='skill__container'>
             <h3>Backend Development</h3>
             <div className='skills__logo'>
                <div className='frontend'>

                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/html-5--v1.png" alt="html"
                        />
                        <p>Html 5</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                        style={{ width: "35px", height: "35px" }}
                        src="https://img.icons8.com/plasticine/100/null/react.png" alt="react"
                        />
                        <p>React</p>        
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/css3.png" alt="css"
                        />
                        <p>Css</p>         
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/redux.png" alt="redux"
                        />
                        <p>Redux</p>        
                    </article>  
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/javascript.png" alt="javascript"
                        />
                        <p>JavaScript</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/chakra-ui.png" alt="chakra"
                        />
                        <p>Chakra UI</p>        
                    </article>
                </div>
             </div>
          </div>
          {/* Tools Logo */}
          <div className='skill__container'>
             <h3>Tools</h3>
             <div className='skills__logo'>
                <div className='frontend'>

                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/html-5--v1.png" alt="html"
                        />
                        <p>Html 5</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                        style={{ width: "35px", height: "35px" }}
                        src="https://img.icons8.com/plasticine/100/null/react.png" alt="react"
                        />
                        <p>React</p>        
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/css3.png" alt="css"
                        />
                        <p>Css</p>         
                    </article> 
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/redux.png" alt="redux"
                        />
                        <p>Redux</p>        
                    </article>  
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/fluency/48/null/javascript.png" alt="javascript"
                        />
                        <p>JavaScript</p>        
                    </article>
                    <article className='skills__details'>
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src="https://img.icons8.com/color/48/null/chakra-ui.png" alt="chakra"
                        />
                        <p>Chakra UI</p>        
                    </article>
                </div>
             </div>
          </div>

        </div>
    </div>
  )
}

export default Skill