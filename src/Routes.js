import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

  import Description from './Description';
  
  const Routes = () => (
    <Router>
      <div>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/about" component={Description} />
      </div>
    </Router>
  );