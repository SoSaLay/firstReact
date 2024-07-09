import React, {Component} from 'react';

class info extends Component{
render(){

const{name,dob,phone}= this.props.person;

return(

    <div>
    <h1>My Basic Information</h1>
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Date of Birth: {dob}</p>
    </div>

)



}
}

export default info;