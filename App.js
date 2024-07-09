import React, { Component } from 'react';


class App extends Component {
constructor(props){
  super(props)
  this.state={
    person:{}
  }
}


  render() {
    return (
      <div>
        <h1>My Basic Information</h1>
        <p>Name: Sulayman K</p>
        <p>Phone: 704-704-7044</p>
        <p>Date of Birth: April 15, 5000</p>
      </div>
    );
  }
}

export default App;
