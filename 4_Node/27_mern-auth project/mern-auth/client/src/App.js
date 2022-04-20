import React ,{ Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <h1>Hello</h1>
        <Navbar />
      </div>
    );
  }
  
}

export default App;
