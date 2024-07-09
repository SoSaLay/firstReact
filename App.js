import React, { Component } from 'react';
import info from './info.js'

class App extends Component {
constructor(props){
  super(props)
  this.state={
    person:{
      name:'Sulayman K',
      dob:'April 15, 5000',
      phone:'704-704-7044'
    }
  }
}


  render() {
    return (
      <div>
      <info person ={this.state.person}/>
      </div>
    );
  }
}

export default App;
