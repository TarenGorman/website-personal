import React, { Component } from 'react';
import * as THREE from 'three';
import './index..css';
import Construction from '../Construction';
import Footer from '../Footer';


class Contact extends Component {
  render() {
    return (
      <div className="page">
        <div className="contact-container">
          <h1> Contact </h1>
          <p> To contact me please send me a message in the form below: </p>
        </div>
        <div className="message-container">
          <h1>Message Component </h1>
          <div className="message"></div>
        </div>
        <div className="profiles-container">
          <h1> Other Profiles </h1>
          <div className="profiles"></div>
        </div>
        <div className="flight-container">
          <Construction/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
