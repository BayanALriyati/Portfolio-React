import React  from "react";

class Home extends React.Component {
    render(){
   return (
 <>
<section className="home" id="home">

<div class="content">
    <span className="hi"> hi there... </span>
    <h3> i am <span> {this.props.Name} </span> </h3>
    <p className="info"> {this.props.Job} </p>
    <a href="#about" className="btn">about me</a>
</div>

<div className="image">
    <img src={require("../images/bayan-code.png")} alt="logo"/>
</div>

</section>
 </>
 
   )
    }
 
 }
 export default Home ; 




