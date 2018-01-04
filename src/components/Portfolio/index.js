import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';
import Construction from '../Construction';


class Portfolio extends Component {
  render() {
    return (
      <div className="page">
        <div className="hero-image">
          <div className="hero-text">
          <h1>Taren Gorman
            <br/>
              Data Scientist and Engineer
          </h1>
          </div>
        </div>
        <div className="flight-container">
          <Construction/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
