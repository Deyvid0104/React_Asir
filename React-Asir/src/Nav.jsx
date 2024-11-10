import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { IoIosContact } from "react-icons/io";

function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Noticias" id="basic-nav-dropdown">
            <NavDropdown.Item href="/noticias/jefatura">Noticias de Jefatura</NavDropdown.Item>
            <NavDropdown.Item href="/noticias/informatica">Noticias de Informática</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/galeria">Galería</Nav.Link>
          <Nav.Link href="/about"><IoIosContact /> Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navegacion;