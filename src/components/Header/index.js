import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="Header-title">Taren Gorman</h1>
        <ul>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
