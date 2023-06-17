import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { Link  } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" className = "navbar navbar-dark bg-dark sticky-top" expand="lg">
        <Container>
          <HashLink smooth to="/PersonalWebsite/#" className = "navbar-brand">Charlie T</HashLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className= "flex-row-reverse" >
            <Nav className="ml-auto">
              <HashLink smooth to="/PersonalWebsite/#" className="nav-link px-4 py-3">Home</HashLink>
              <HashLink smooth className="nav-link px-4 py-3"  to="/PersonalWebsite/#about">About</HashLink>
              <HashLink smooth to="/PersonalWebsite/#portfolio" className="nav-link px-4 py-3">Portfolio</HashLink>
              <HashLink smooth to="/PersonalWebsite/#contact" className="nav-link px-4 py-3">Contact</HashLink>
              <NavDropdown className="px-4 py-2" title="Tutorials" id="basic-nav-dropdown">
                <Link to="/PersonalWebsite/arrays" className="dropdown-item">Arrays</Link>
                <Link to="/PersonalWebsite/arraylist" className="dropdown-item">Array Lists</Link>
                <Link to="/PersonalWebsite/oop" className="dropdown-item">OOP</Link>
                <Link to="/PersonalWebsite/search" className="dropdown-item">Searching</Link>
                <Link to="/PersonalWebsite/sort" className="dropdown-item">Sorting</Link>
                <Link to="/PersonalWebsite/recursion" className="dropdown-item">Recursion</Link>
                <Link to="/PersonalWebsite/bibliography" className="dropdown-item">Bibliography</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
