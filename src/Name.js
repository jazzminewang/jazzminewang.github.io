import React, { Component } from 'react';
import './App.css';

class Name extends Component {
  render() {

    function onClick(e) {
        e.preventDefault();
    }

    return (        
        <div className="App-header" onClick={onClick}>
          <h2>jasmine wang</h2>
        </div>
    );
  }
}

export default Name;