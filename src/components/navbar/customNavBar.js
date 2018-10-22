import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomNavBar extends Component {
    render() {
        return(
               <Navbar default collapseOnSelect>
                   <Navbar.Header>
                       <Navbar.Brand>
                           <link to="/">liens</link>
                       </Navbar.Brand>
                       <Navbar.Toggle />
                   </Navbar.Header>
                   <Navbar.Collapse>
                       <Nav pullLeft>
                           <NavItem eventKey={1} componentClass={Link} to="/">Home</NavItem>
                           <NavItem eventKey={2} componentClass={Link} to="/login">Login</NavItem>
                           <NavItem eventKey={3} componentClass={Link} to="/">HomeBis</NavItem>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
        )
    }
}