import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">S-cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavLink to={"/cart"}>
              <GiShoppingCart
                style={{ color: "white", marginLeft: "920px" }}
                size={35}
              />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
