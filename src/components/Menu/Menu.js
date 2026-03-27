import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../SOLARTARIUM.svg';

import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';


const menu = (props) => {
    return (
        
      /*puts navbar in dark theme */

        <Navbar bg="dark" expand="lg"> 


      <Container>


      <Nav.Link className = "text-muted"  href="/"><img     /*makes logo a link to home page and adds large logo to navbar*/
              src={logo}
              width="400"           
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> </Nav.Link>
          

        <Navbar.Brand href="#home">{props.children}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className = "text-muted" href="/"> Home</Nav.Link> 
            <Nav.Link className = "text-muted"  href="About"> About</Nav.Link>
            
            <Dropdown as={NavItem}>
              
              <Dropdown.Toggle as={NavLink} className = "text-muted" >Planets</Dropdown.Toggle>
              <Dropdown.Menu className = "dropdown-menu-dark">
                <Dropdown.Item href= "/Mercury">Mercury</Dropdown.Item>
                <Dropdown.Item  href= "/Venus" >Venus</Dropdown.Item>
                <Dropdown.Item  href= "/Earth">Earth</Dropdown.Item>
                <Dropdown.Item  href= "/Mars">Mars</Dropdown.Item>
                <Dropdown.Item  href= "/Jupiter">Jupiter</Dropdown.Item>
                <Dropdown.Item  href= "/Saturn">Saturn</Dropdown.Item>
                <Dropdown.Item  href= "/Uranus">Uranus</Dropdown.Item>
                <Dropdown.Item  href= "/Neptune">Neptune</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default menu;