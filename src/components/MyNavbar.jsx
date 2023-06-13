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
      <Navbar bg="light" className = "navbar navbar-dark bg-dark sticky-top" expand="lg">
        <Container>
          <a href="/PersonalWebsite/#" className = "navbar-brand">Charlie T</a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className= "flex-row-reverse" >
            <Nav className="ml-auto">
              <a href="/PersonalWebsite/#" className="nav-link px-4 py-3">Home</a>
              <a className="nav-link px-4 py-3"  href="PersonalWebsite#about">About</a>
              <a href="PersonalWebsite#portfolio" className="nav-link px-4 py-3">Portfolio</a>
              <NavDropdown className="px-4 py-2" title="Tutorials" id="basic-nav-dropdown">
                <Link to="/PersonalWebsite/arrays" className="dropdown-item">Arrays</Link>
                <Link to="/PersonalWebsite/arraylist" className="dropdown-item">Array Lists</Link>
                <Link to="/PersonalWebsite/oop" className="dropdown-item">OOP</Link>
                <Link to="/PersonalWebsite/search" className="dropdown-item">Searching</Link>
                <Link to="/PersonalWebsite/sort" className="dropdown-item">Sorting</Link>
                <Link to="/PersonalWebsite/recursion" className="dropdown-item">Recursion</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
