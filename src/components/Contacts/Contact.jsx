import React from "react";
import "./contact.css";
import {ImGithub,ImLinkedin,ImMail3,ImPhone } from 'react-icons/im';

const Contact = () => {
  return (
    <div id="contact">
      <div  className="ContactContainer">
        
         
            <h1 className="GithubH1">Contact Me</h1>
         
              <div className="middleSection">
                    <div>
                      <ImLinkedin fontSize="1.8rem" />
                      <h1>LinkedIn</h1>
                      <p>You can contact me on LinkedIn</p>
                      <a
                        href="linkedin.com/in/sumit-kumar123"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p>Sumit Kumar</p>
                      </a>
                    </div>

                    <div>
                      <ImGithub fontSize="1.8rem" />
                      <h1>Github</h1>
                      <p>You can contact me on Github</p>
                      <a
                        href="https://github.com/sumitkprasad123"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p>sumitkprasad123</p>
                      </a>
                    </div>

                    <div>
                      <ImPhone fontSize="1.8rem" />
                      <h1>Phone</h1>
                      <p>My Phone Number</p>
                      <a href="tel:+918340348161" rel="noreferrer" target="_blank">
                        <p>+91-8340348161</p>
                      </a>
                    </div>

                    <div>
                      <ImMail3 fontSize="1.8rem" />
                      <h1>Email</h1>
                      <p>You can Simply mail me just by clicking on my email</p>
                      <a
                        href="mailto:sumitkprasad123@outlook.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <p>sumitkprasad123@outlook.com</p>
                      </a>
                    </div>
               </div>
        
      </div>
    </div>
  );
};

export default Contact;