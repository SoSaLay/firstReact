import React, { Component } from 'react';
//  imports React library and the Component class 
//necessary for building UI components

import Info from './info';
//imports Info component from the info.js 

class App extends Component {
  //props is an argument which contains any passed-in properties.
constructor(props){
  super(props)
  
  //an object with a single property
  this.state={
    personList:[
      
      {
      name:'Sulayman K',
      dob:'April 15, 5000',
      phone:'704-704-7044'
    },
    {
      name:'SulK',
      dob:'March 15, 2000',
      phone:'704-704-7044'
    },
    {
      name:'Ronr',
      dob:'April 15, 2300',
      phone:'704-704-7044'
    },
    {
      name:'Lenny',
      dob:'April 15, 2300',
      phone:'704-704-7044'
    },
    {
      name:'Wick',
      dob:'April 15, 2300',
      phone:'704-704-7044'
    }
  
  ]

  
  }
}

//defines what the UI should look like.
  render() {
    //specifies the JSX to be rendered to the DOM
    return (
      <div>
        {this.state.personList.map((person,index)=>(
          <Info key ={index} person={person}/>
        ))}
      </div>
    );
  }
}


export default App;


//Very Easy

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>My Basic Information</h1>
//         <p>Name: Sulayman K</p>
//         <p>Phone: 704-704-7044</p>
//         <p>Date of Birth: April 18, 500</p>
//       </div>
//     );
//   }
// }
// export default App;








