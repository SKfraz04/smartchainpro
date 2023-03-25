import React from "react";
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Nav,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "./MyNavbar.css"

function MyNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar className="topnavbar" fixed="top" >
              <Container>
                <NavbarBrand href="#">
                  <img src="image/logo.webp" alt="logo" className="aline-top" />
                </NavbarBrand>
                <NavbarToggle aria-controls="my-nav" />
                <NavbarCollapse className="allnav text-light" id="my-nav">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#aboutus">About Us</Nav.Link>
                  <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                  <Nav.Link href="#product">Product</Nav.Link>
                  <Nav.Link href="#ourteam">Our Team</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                  <Navbar.Text className="commonbtn">
                    <button className="commonbutton" href="/">Login/SIgnup</button>
                  </Navbar.Text>
                </NavbarCollapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNavbar;
