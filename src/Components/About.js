import React  from "react";


class About extends React.Component {
    render(){
   return (
 <>
<section className="about" id="about">

<h1 className="heading"> about <span> me </span> </h1>

<div className="row-1">

    <div className="image">
       <img src={require("../images/bayan.png")} alt="picture"/>
    </div>

    <div className="content">
        <h3> my name is {this.props.Name}</h3>
        <p>{this.props.About}</p>
        <div className="box-container">
            <div className="box">
                <p> <span> Age : </span> {this.props.Age} </p>
                <p> <span> Language : </span> {this.props.Language} </p>
            </div>
            <div className="box"> 
                <p> <span> phone: </span> {this.props.Phone_1} </p>
                <p> <span> email : </span> {this.props.Email} </p>
            </div>
        </div>
        <a download="CV" href="./Image/cv.pdf" className="btn">Download CV</a>
    </div>

</div>
</section>
 </>
 
   )
    }
 
 }
 export default About ; 




