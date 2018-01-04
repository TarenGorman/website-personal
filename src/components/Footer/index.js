import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1 className="Footer-title">Taren Gorman</h1>
        <ul>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
