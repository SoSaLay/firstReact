import React, {Component} from 'react';

class Info extends Component{
render(){

const{name,dob,phone}= this.props.person;
//accesses the properties from person within app.js


//specifies the JSX to be rendered to the DOM when componet is called
return(

    <div style={{marginBottom:'20px'}}>
    <h1>My Basic Information</h1>
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Date of Birth: {dob}</p>
    </div>

)

}
}

export default Info;