import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import { Link  } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" className = "navbar-dark bg-dark sticky-top" expand="lg">
        <Container>
          <Link to="/" className = "navbar-brand">Charlie To</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className= "flex-row-reverse" >
            <Nav className="ml-auto">
              <Link to="/" className="nav-link px-4 py-3">Home</Link>
              <Link to="/about" className="nav-link px-4 py-3">About</Link>
              <Link to="/skills" className="nav-link px-4 py-3">Skills</Link>
              <Link to="/portfolio" className="nav-link px-4 py-3">Portfolio</Link>
              <NavDropdown className="px-4 py-2" title="Tutorials" id="basic-nav-dropdown">
                <Link to="/arrays" className="dropdown-item">Arrays</Link>
                <Link to="/arraylist" className="dropdown-item">Array Lists</Link>
                <Link to="/oop" className="dropdown-item">OOP</Link>
                <Link to="/search" className="dropdown-item">Searching</Link>
                <Link to="/sort" className="dropdown-item">Sorting</Link>
                <Link to="/recursion" className="dropdown-item">Recursion</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
