import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

class App extends Component {
  render(){
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Landing />
        </div>
      </Router>
    );
  }
  
}

export default App;
