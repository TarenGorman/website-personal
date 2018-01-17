import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import MediaQuery from 'react-responsive';
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
          <MediaQuery minDeviceWidth={1115} component="p" className="p">
          Hi I'm Taren Gorman, I graduated from University of Washington in 2017 with a B.S. in Applied Physics. Currently I'm looking to join a company to further apply my skills in programming and engineering.
          I am especially interested in projects involving machine learning, real-time systems, and VR/AR. Please feel free to contact me with any opportunities.
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1115} component="p" className="p-mobile">
          Hi I'm Taren Gorman, I graduated from University of Washington in 2017 with a B.S. in Applied Physics. Currently I'm looking to join a company to further apply my skills in programming and engineering.
          I am especially interested in projects involving machine learning, real-time systems, and VR/AR. Please feel free to contact me with any opportunities.
          </MediaQuery>
        </div>
        <div className="resume-container">
          <h1> Resume </h1>
          <Resume/>
          <h2><a href={require("../../images/primary_resume.pdf")} download="Taren_Gorman_Resume_2018"> Download Resume </a></h2>
        </div>
        <div className="flight-container">
          <Construction/>
        </div>
        <Footer/>
      </div>
    );
  }
}

const Resume = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={1115} component="div" className="resume">
        <Document file={require("../../images/primary_resume.pdf")}>
          <Page pageNumber={1} width={800}/>
        </Document>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1115} component="div" className="resume-mobile">
        <Document file={require("../../images/primary_resume.pdf")}>
          <Page pageNumber={1} width={window.innerWidth*0.90}/>
        </Document>
      </MediaQuery>
    </div>
  );
}

export default About;
