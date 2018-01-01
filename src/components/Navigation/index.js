import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Construction from '../Construction';

import './index..css';

class Navigation extends Component {
  render() {
    return (
      <HashRouter>
        <div className="nav-content">
          <header>
            <h1 className="header-title">Taren Gorman</h1>
            <ul>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/">About</NavLink></li>
            </ul>
          </header>
          <div className="content">
            <Route exact path="/" component={Construction}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Navigation;
