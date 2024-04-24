import React  from "react";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";



class Skills extends React.Component {
    render(){
   return (
 <>
<section className="skills" id="skills">

<h1 className="heading"> <span> My </span> skills </h1>

    <div className="box-container">

        <div className="box">
            <i><FaHtml5 /></i>
            <h3>HTML</h3>
        </div>

        <div className="box">
            <i><FaCss3 /></i>
            <h3>CSS</h3>
        </div>     

        <div className="box">
            <i><SiJavascript /></i>
            <h3>Java Script</h3>
        </div>

        <div className="box">
          <i><FaWordpress /></i>
            <h3>Wordpress</h3>
        </div>

        <div className="box">
           <i><FaPhp /></i>
            <h3>PhP</h3>
        </div>

        <div className="box">
           <i><FaLaravel /></i>
            <h3>Laravel</h3>
        </div>

        <div className="box">
           <i><FaReact /></i>
            <h3>React</h3>
        </div>

        <div className="box">
            <i><FaBootstrap /></i>
            <h3>Bootstrap</h3>
        </div>
        
        <div className="box">
            <i><FaGithub /></i>
            <h3>Github</h3>
        </div>
        
    </div>

</section>

 </>
 
   )
    }
 
 }
 export default Skills ; 




