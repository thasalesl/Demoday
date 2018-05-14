import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logoEmp from './img/logoEmp.png';


const NavLink = require('react-router-dom').NavLink;

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="flyout">
          <Navbar color="teal darken-4" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              < img src={logoEmp} alt="" height="45" /> LupaJob
            </NavbarBrand>
            <NavbarToggler>


            </NavbarToggler>
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/components/input">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/components/media">Informações</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/javascript">Mapa</NavLink>
                </NavItem>
              </NavbarNav>
            </div>
          </Navbar>

          <main style={{ marginTop: '4rem' }}>
            <Routes/>

          </main>
          <Footer color="teal darken-4">
            <p className="footer-copyright mb-0">
              &copy;  {(new Date().getFullYear())} Copyright: <a href=""> lupajob.com </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
