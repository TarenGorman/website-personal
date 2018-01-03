import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Construction from '../Construction';

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
      <HashRouter>
        <div className="nav-wrapper">
          <header>
            <h1 className="header-title">Taren Gorman</h1>
            <MediaQuery minDeviceWidth={640} component="div" className="navbar">
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/">About</NavLink></li>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={640} component="div" className="navbar-mobile">
              <i className="fa fa-bars" onClick={ this.toggleDropped }></i>
              {this.state.isDropped && <Menu toggleDropped={ this.toggleDropped }/>}
            </MediaQuery>
          </header>
          <div className="content">
            <Route exact path="/" component={ Construction }/>
            <Route path="/projects" component={ Projects }/>
            <Route path="/contact" component={ Contact }/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const Menu = ({ toggleDropped = () => {} }) => {
  return (
    <div className="mobile-links">
      <li><NavLink to="/" onClick={ toggleDropped }>About</NavLink></li>
      <li><NavLink to="/projects" onClick={ toggleDropped }>Projects</NavLink></li>
      <li><NavLink to="/contact" onClick={ toggleDropped }>Contact</NavLink></li>
    </div>
  );
}

export default Navigation;
