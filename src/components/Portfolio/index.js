import React, { Component } from 'react';
import './index..css';
import Airplane from '../Airplane';
import Footer from '../Footer';
import MediaQuery from 'react-responsive';



class Portfolio extends Component {
  render() {
    return (
      <div className="page">
        <div className="hero-image" style={{ height: window.innerWidth / 3 }}>
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
          <Airplane/>
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
          <a href="https://ds-dash.herokuapp.com">
            <span className="link-spanner"></span>
          </a>
          <img src={require("../../images/sindy2.png")} alt="Project"/>
          <h4> Pendulum Discovery </h4>
          <h5> Sparse Identification of Nonlinear Dynamics </h5>
        </div>
        <div className="work-col">
          <img src={require("../../images/rl-trader.jpg")} alt="Project"/>
          <h4> Neural Trader </h4>
          <h5> Automated market trader using Recursive Neural Net
           </h5>
        </div>
        <div className="work-col">
          <a href="https://github.com/Photon-Fighter/Photon-Fighter">
            <span className="link-spanner"></span>
          </a>
          <img src={require("../../images/photon.jpg")} alt="Project"/>
          <h4> Photon Fighter </h4>
          <h5> 48 Hr Game Jam team production </h5>
        </div>
      </div>
    );
  }
}

export default Portfolio;
