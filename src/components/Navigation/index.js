import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {
  Route,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';

import Portfolio from '../Portfolio';
import About from '../About';

import 'font-awesome/css/font-awesome.min.css'
import './index..css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropped: false
    }
    this.toggleDropped = this.toggleDropped.bind(this)
  }

  toggleDropped () {
    this.setState({
      isDropped: !this.state.isDropped
    })
    console.log(this.state.isDropped)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="nav-wrapper">
          <header>
            <MediaQuery minDeviceWidth={1115} component="div" className="navbar">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/">Portfolio</NavLink></li>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1115} component="div" className="navbar-mobile">
              <i className="fa fa-bars" onClick={ this.toggleDropped }></i>
              {this.state.isDropped && <Menu toggleDropped={ this.toggleDropped }/>}
            </MediaQuery>
          </header>
          <div className="content-container">
            <Route exact path="/" component={ Portfolio }/>
            <Route path="/about" component={ About }/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const Menu = ({ toggleDropped = () => {} }) => {
  return (
    <div className="mobile-links">
      <li><NavLink to="/" onClick={ toggleDropped }>Portfolio</NavLink></li>
      <li><NavLink to="/about" onClick={ toggleDropped }>About</NavLink></li>
    </div>
  );
}

export default Navigation;
