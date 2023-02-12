import React  from "react";
import { FaLink } from "react-icons/fa";


class Projects extends React.Component {
    render(){
   return (
 <>
 <section className="Project" id="Project">

 <h1 className="heading"> <span> My </span> Project </h1>

 <div className="box-container">

     <div className="box">
         <img src={require("../images/OIP.jpeg")} alt="image"/>
         <h3>{this.props.NamePro_1}</h3>
         <div class="icons">
             <a href={this.props.Link_1} ><i><FaLink/></i></a>
         </div>
     </div>

     <div className="box">
         <img src={require("../images/OIP (1).jpeg")} alt="image"/>
         <h3>{this.props.NamePro_2}</h3>
         <div className="icons">
             <a href={this.props.Link_2}><i><FaLink/></i></a>
         </div>
     </div>

     <div className="box">
         <img src={require("../images/php1.png")} alt="image"/>
         <h3>{this.props.NamePro_3}</h3>
         <div className="icons">
             <a href={this.props.Link_3} ><i><FaLink/></i></a>
         </div>
     </div>

     <div className="box">
         <img src={require("../images/laravel.png")} alt="image"/>
         <h3>{this.props.NamePro_4}</h3>
         <div className="icons">
             <a href={this.props.Link_4} ><i><FaLink/></i></a>
             </div>
     </div>

 </div>

</section>
 </>
 
   )
    }
 
 }
export default Projects ; 
