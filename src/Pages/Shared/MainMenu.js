import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const MainMenu = () => {
  const { user, handleLogout } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Breakthrough Travel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              {user.email ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {user.email && (
                <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/myOrders">
                    My Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Manage All Order
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addOffer">
                    Add A New Offer
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainMenu;
