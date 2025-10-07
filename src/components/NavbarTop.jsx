import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function NavbarTop() {
    return (
        <Navbar expand="lg" variant="dark" className="navbar-neon fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="brand"><span className="neon">Portofolio</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="nav" />
                <Navbar.Collapse id="nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}