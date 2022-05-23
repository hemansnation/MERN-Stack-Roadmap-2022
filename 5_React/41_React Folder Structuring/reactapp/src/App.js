import React, { Component } from 'react';
import Header from './components/header/Header';

class App extends Component{

    render() {
        return (
            <div>
                <Header />
                <h1>This is App from App.js</h1>
            </div>
        )
    }
}

export default App