import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import './App.css';

class Resume extends Component {
  state = {
    file: "./Resume.pdf",
    pageNumber: null,
    numPages: null,
  }

  onDocumentLoadSuccess = ({ numPages }) =>
    this.setState({
      numPages,
      pageNumber: null,
  })

  render() {
    const { file } = this.state;

    function onClick(e) {
      e.preventDefault();
      return (
        <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}/>
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