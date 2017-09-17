import React, { Component } from 'react';
import './App.css';

class Mail extends Component {
  render() {
    
    function onClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location = "mailto:jwan483@uwo.ca"
    }
    return (        
      <p className="App-intro" onClick={onClick}>
          mail
      </p>
    );
  }
}

export default Mail;