import React, { Component } from 'react';

import './App.css';

class Resume extends Component {
  render() {
    function onClick(e) {
      e.preventDefault();
      return (
        window.location = "https://drive.google.com/file/d/0BweAYez46M55cXAxV1BXTHVBc0k/view?usp=sharing"
      )
  }
    return (        
      <p className="App-intro" onClick={onClick}>
          resume
      </p>
    );
  }
}

export default Resume;