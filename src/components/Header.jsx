import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import himart from "../image/himart.png";
import classes from "../style/all.module.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" as={Link} to={`/`}>
            <img src={himart} className={classes.logo} alt="Himart" />
            <span className={classes.brandName}>Himart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#top-brand">Top Brand</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={`aboutus`}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to={`/contactus`}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={`/login`}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
