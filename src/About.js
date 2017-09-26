import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {

    function onClick(e){
      e.preventDefault();
      console.log("hi!")
      return (
        window.location = "/about"
      )
  }

    return (        
      <p className="App-intro" onClick={onClick}>
          about me
      </p>
    );
  }
}

export default About;