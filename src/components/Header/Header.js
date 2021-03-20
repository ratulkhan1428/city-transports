import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="sticky-nav">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
              <Navbar.Brand href="/home"><img style={{width:'200px'}} src={logo} alt=""/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/destination">Destination</Nav.Link>
                  <Nav.Link href="blog">Blog</Nav.Link>
                  <Nav.Link style={{backgroundColor: 'green', borderRadius: '10px'}} href="login">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;