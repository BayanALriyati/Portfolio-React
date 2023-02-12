import React  from "react";


class Experience extends React.Component {
    render(){
   return (
 <>
<section class="experience" id="experience">

<h1 class="heading"> <span> my </span> experience </h1>

<div class="box-container">
    <div class="box">
        <div class="content">
            <span> {this.props.data_1} </span>
            <h3>{this.props.Univ_1}</h3>
            <p>{this.props.Class_1}</p>
        </div>
    </div>

    <div class="box">
        <div class="content">
            <span> {this.props.data_2} </span>
            <h3>{this.props.Univ_2}</h3>
            <p>{this.props.Class_2}</p>
        </div>
    </div>

    <div class="box">
        <div class="content">
            <span> {this.props.data_3} </span>
            <h3>{this.props.Univ_3}</h3>
            <p>{this.props.Class_3}</p>
        </div>
    </div>
</div>

</section>

 </>
 
   )
    }
 
 }
 export default Experience ; 




