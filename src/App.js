import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.js';
import './App.css';

import Main from './layout/main';
import Hero from './components/hero';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Router>
            <div>
                <Header/>
                <Hero/>
                <Main/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
