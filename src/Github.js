import React, { Component } from 'react';

import './App.css';

class Github extends Component {
  render() {
    function onClick(e) {
      e.preventDefault();
      return (
        window.location = "https://github.com/jazzminewang"
      )
  }
    return (        
      <p className="App-intro" onClick={onClick}>
          code
      </p>
    );
  }
}

export default Github;