import React  from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


class ContactUs extends React.Component {
    render(){
   return (
 <>

<section id="contact" className="contact">
        <h1 className="heading"> <span> Contact </span> Me </h1>
       <div className="container">
            <div className="left-details">
                <h3>Let's talk</h3>
                <p>Please fill out the form in this section to contact me.
                    Or call between 9:00 a.m. and 8:00 p.m. Eastern time, Sunday through Thursday.</p>
                <form action="">
                    <div className="inputBox">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="inputBox">
                        <label for="name">Your Email</label>
                        <input type="text"/>
                    </div>
                    <div className="inputBox">
                        <label for="name">Your Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    {/* <button className="btn">Send Message</button> */}
                </form>
                <button className="btn">Send Message</button>

            </div>
            <div className="right-details">
                <img src={require("../images/contact.png")} alt="image"/>
                <div className="info">
                    {/* <div className="icon"><FaMapMarkerAlt /></div> */}
                    
                    <div className="icon"><FaMapMarkerAlt />Aqaba / Jordan</div> 
                    <div className="icon"><FaPhone />0786324604</div>
                    <div className="icon"><FaEnvelope />bayanalriyati95@gmail.com</div>
                </div>
                <div className="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100003667957212&mibextid=ZbWKwL" target="_blank"><FaFacebookF /></a>  
                <a href="https://www.instagram.com/bayan.alriyati?igsh=MWU1ZXRscDRldG95NA==" target="_blank"><FaInstagram /></a>
                <a href="https://github.com/BayanALriyati" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/bayan-alriyati-13917b253" target="_blank"><FaLinkedinIn /></a>
                    
                </div>
            </div>
        </div>
    </section>

 </>
 
   )
    }
 
 }
 export default ContactUs ; 




