import React, { Component } from 'react';
import logo from "../../logo.svg";
import './navbar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';






export const NavbarHome = (props) => {

    return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Sp dofus</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/login">
                        Login
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Download
                    </NavItem>
                    <NavDropdown eventKey={3} title="Ladder" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Persos</MenuItem>
                        <MenuItem eventKey={3.2}>Metiers</MenuItem>
                        <MenuItem eventKey={3.3}>Guildes</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
}

