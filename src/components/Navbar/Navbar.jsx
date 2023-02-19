import React, { useState } from 'react'
import "./navbar.css"
import { FcHome,FcBusinessman,FcEngineering,FcViewDetails,FcContacts } from 'react-icons/fc'
import {GrCopy,GrMenu,GrClose} from "react-icons/gr"


const Navbar = () => {
   const [status,setStatus] = useState(false)
   const [activeNav,setActiveNav] = useState("#")
   const handleClick = () => {
      setStatus(!status)
   }
   console.log(status)
   return (
    <div id="nav-menu">
      <div id={!status?"nav":"hidden__nav"}>
         <div>Sumit </div>

         <div  id={!status?"menu":"hidden__menu"} >           
               <a class="nav-link home" href="/#"  onClick={() => setActiveNav("#")} id={activeNav === "#" ? "active":""} ><FcHome className='nav-icone' />Home</a>
               <a class="nav-link about" href="/#about" onClick={() => setActiveNav("#about")} id={activeNav === "#about" ? "active":""}><FcBusinessman className='nav-icone'/> About Me</a>
               <a class="nav-link skills" href="/#skills" onClick={() => setActiveNav("#skills")} id={activeNav === "#skills" ? "active":""}><FcEngineering className='nav-icone' />Skills</a>
               <a class="nav-link projects" href="/#projects" onClick={() => setActiveNav("#projects")} id={activeNav === "#projects" ? "active":""}><FcViewDetails className='nav-icone' />Projects</a>
               <a class="nav-link contact" href="/#contact" onClick={() => setActiveNav("#contact")} id={activeNav === "#contact" ? "active":""}><FcContacts className='nav-icone' />Contact</a>
               <a class="nav-link resume"
                   onClick={() => setActiveNav("#resume")}
                    id={activeNav === "#resume" ? "active":""}
                    href="https://drive.google.com/file/d/1-CJwYy4RepRckb80rM-2jTfdMVAKdM5T/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    >Resume<GrCopy className='nav-icone' /></a> 
         </div>

         <div className='nav-hambarger' onClick={handleClick}>
            {!status?<GrMenu className='nav-icone' />:<GrClose className='nav-icone' />}
         </div>
         
      </div>
    </div>
  )
}

export default Navbar