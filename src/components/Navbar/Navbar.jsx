import React, { useState } from 'react'
import "./navbar.css"
import { FcHome,FcBusinessman,FcEngineering,FcViewDetails,FcContacts } from 'react-icons/fc'
import {GrCopy,GrMenu,GrClose} from "react-icons/gr"


const Navbar = () => {
   const [status,setStatus] = useState(false)
   const handleClick = () => {
      setStatus(!status)
   }
   console.log(status)
   return (
    <div id="nav-menu">
       <div>Sumit </div>
       <div  id={"menu"} >
         
             <p class="nav-link home"><FcHome className='nav-icone' />Home</p>
             <p class="nav-link about"><FcBusinessman className='nav-icone'/> About</p>
             <p class="nav-link skills"><FcEngineering className='nav-icone' />Skills</p>
             <p class="nav-link projects"><FcViewDetails className='nav-icone' />Projects</p>
             <p class="nav-link contact"><FcContacts className='nav-icone' />Contact</p>
             <p class="nav-link resume">Resume<GrCopy className='nav-icone' /></p>
         
       </div>
       <div
          className='nav-hambarger'
          onClick={handleClick}
        >
         {status?<GrMenu className='nav-icone' />:<GrClose className='nav-icone' />}
         </div>

    </div>
  )
}

export default Navbar