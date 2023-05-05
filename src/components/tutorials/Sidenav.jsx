import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = () => {
  return (
      <CDBSidebar textColor="#fff" backgroundColor="#333" className=" sideNav">
        <span style = {{position: "fixed"}}>
        <CDBSidebarHeader className = ""prefix={<i className="fa fa-bars fa-large"></i>}>
          <span className="text-decoration-none" style={{ color: "inherit", marginRight: '55px' }}>
            Java Tutorials
          </span>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/arrays" activeClassName="activeClicked nav-link">
              <CDBSidebarMenuItem icon="columns">Arrays</CDBSidebarMenuItem>
            </Link>
            <Link
              exact
              to="/arraylist"
              activeClassName="activeClicked nav-link"
            >
              <CDBSidebarMenuItem icon="columns">Arraylists</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/oop" activeClassName="activeClicked nav-link">
              <CDBSidebarMenuItem icon="columns">OOP</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/search" activeClassName="activeClicked nav-link">
              <CDBSidebarMenuItem icon="columns">Searching</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/sort" activeClassName="activeClicked nav-link">
              <CDBSidebarMenuItem icon="columns">Sorting</CDBSidebarMenuItem>
            </Link>
            <Link
              exact
              to="/recursion"
              activeClassName="activeClicked nav-link"
            >
              <CDBSidebarMenuItem icon="columns">Recursion</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        </span>
      </CDBSidebar>
  );
};

export default Sidenav;
