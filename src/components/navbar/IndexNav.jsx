import React from "react";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {
    NavLink, 
  } from 'react-router-dom'


const IndexNav = () => {
    
       
    return (
        <nav className="navBar">
            <input type="checkbox" className="checkDisplay" />
            <FontAwesomeIcon icon={faBars} className="nav-item nav-bars"/>            
            <NavLink to="/" className= 'nav-item nav-Link' >Home</NavLink>
            <NavLink to="/banner" className= 'nav-item nav-Link'>Banner</NavLink>
            <NavLink to="/team" className= 'nav-item nav-Link'>Contac us</NavLink> 
            <NavLink to="#" className= 'nav-item nav-Link'>Blog</NavLink>
            <NavLink to="#" className= 'nav-item nav-Link'>Proyects</NavLink>
        </nav>  
      );
}
 
export default IndexNav;