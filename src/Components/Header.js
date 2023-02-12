import React  from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


class Header extends React.Component {
    render(){
   return (
 <>
<div className="cursor-1"></div>
<div className="cursor-2"></div>


<div id="menu-bars" className="fas fa-bars"></div>
 <header>

<a href="#" className="logo"> <span>BAYAN</span> AL-RIYATI </a>

<nav className="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#skills">Skills</a>
    <a href="#Project">Projects</a>
    <a href="#contact">Contact</a>
</nav>

<div class="follow">
    <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>  
    <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
    <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
    <a href="https://github.com/BayanALriyati" target="_blank"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/bayan-alriyati-13917b253" target="_blank"><FaLinkedinIn /></a>
</div>

</header>
 </>
 
   )
    }
 
 }
 
 export default Header ; 

