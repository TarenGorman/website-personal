import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';
import Construction from '../Construction';
import Footer from '../Footer';
import MediaQuery from 'react-responsive';



class Portfolio extends Component {
  render() {
    return (
      <div className="page">
        <div className="hero-image">
          <div className="hero-text">
          <h1>Taren Gorman
            <br/>
              Data Scientist & Engineer
          </h1>
          </div>
        </div>
        <div className="work-container">
          <MediaQuery minDeviceWidth={1090} component="div" className="work-grid">
            <ColumnItems/>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1090} component="div" className="work-grid-mobile">
            <ColumnItems/>
          </MediaQuery>
        </div>
        <div className="flight-container">
          <Construction/>
        </div>
        <Footer/>
      </div>
    );
  }
}

class ColumnItems extends Component {
  render() {
    return (
      <div className="items">
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> Pendulum Discovery </h4>
          <h5> Sparse Identification of Nonlinear Dynamics </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> Neural Trader </h4>
          <h5> Automated market trader using Recursive Neural Net
           </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> Photon Fighter </h4>
          <h5> 48 Hr Game Jam team production </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> C++ Parrellization </h4>
          <h5> Class project to optimize matrix multiplication </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> Unity sample games </h4>
          <h5> Games produced from courses with highlighted personal additions </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/planet.jpg")}/>
          <h4> Optics Labs </h4>
          <h5> Collection of reports for optics lab </h5>
        </div>
      </div>
    );
  }
}

export default Portfolio;
