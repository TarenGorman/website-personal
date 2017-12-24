import React, { Component } from 'react';
import './index..css';
import Navigation from '../Navigation';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Footer/>
      </div>
    );
  }
}

export default App;
