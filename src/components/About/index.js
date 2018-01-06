import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';
import Construction from '../Construction';
import Footer from '../Footer';

class About extends Component {
  render() {
    return (
      <div className="page">
        <div className="picture-container">
          <h1> About </h1>
          <div className="picture"></div>
        </div>
        <div className="about-container">
          <p> Hi I'm Taren Gorman, I graduated from University of Washington in 2017 with a B.S. in Applied Physics. Currently I'm looking to join a company to further apply my skills in programming and engineering.
          I am especially interested in projects involving data analysis, engineering at scale, and VR/AR. Please feel free to contact me with any opportunities.</p>
        </div>
        <div className="resume-container">
          <h1> Resume </h1>
          <div className="resume"></div>
        </div>
        <div className="flight-container">
          <Construction/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
