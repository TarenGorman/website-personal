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
        <div className="hero-image" style={{ height: window.innerWidth / 1.65 }}>
          <div className="hero-text">
          <h1>Taren Gorman
            <br/>
              Data Science & Programming
          </h1>
          </div>
        </div>
        <div className="work-container">
          <h2> Recent Projects </h2>
          <MediaQuery minDeviceWidth={1115} component="div" className="work-grid">
            <ColumnItems/>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1115} component="div" className="work-grid-mobile">
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
          <img src={require("../../images/sindy2.png")}/>
          <h4> Pendulum Discovery </h4>
          <h5> Sparse Identification of Nonlinear Dynamics </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/rl-trader.jpg")}/>
          <h4> Neural Trader </h4>
          <h5> Automated market trader using Recursive Neural Net
           </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/photon.jpg")}/>
          <h4> Photon Fighter </h4>
          <h5> 48 Hr Game Jam team production </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/test.png")}/>
          <h4> C++ Parrellization </h4>
          <h5> Class project to optimize matrix multiplication </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/laser.jpg")}/>
          <h4> Optics Labs </h4>
          <h5> Collection of reports for optics lab </h5>
        </div>
      </div>
    );
  }
}

export default Portfolio;
