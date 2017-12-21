import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';
import Construction from '../Construction';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Construction/>
        <Footer/>
      </div>
    );
  }
}

export default App;
