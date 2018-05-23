import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbars.js';
import CarouselPage from './components/carousel';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router>
            <div>
              <Navbar />
              <CarouselPage />
           </div>
     </Router>
    );
  }
}

export default App;
