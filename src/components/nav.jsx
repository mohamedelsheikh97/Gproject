import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../css/Navs.css";
import { Link, NavLink } from "react-router-dom";
// import { BsCart3 } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navs = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Navbar bg="light" expand="lg" sticky="top" fixed="top">
      <Container>
        <NavLink className="nav-link" to="/">
          <Navbar.Brand href="#home" className="logoo">
            {" "}
            <div class="loader">
              <svg
                class="car"
                width="102"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(2 1)"
                  stroke="#002742"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    class="car__body"
                    d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                    stroke-width="3"
                  />
                  <ellipse
                    class="car__wheel--left"
                    stroke-width="3.2"
                    fill="rgb(246, 172, 77)"
                    cx="83.493"
                    cy="30.25"
                    rx="6.922"
                    ry="6.808"
                  />
                  <ellipse
                    class="car__wheel--right"
                    stroke-width="3.2"
                    fill="rgb(246, 172, 77)"
                    cx="46.511"
                    cy="30.25"
                    rx="6.922"
                    ry="6.808"
                  />
                  <path
                    class="car__line car__line--top"
                    d="M22.5 16.5H2.475"
                    stroke-width="3"
                  />
                  <path
                    class="car__line car__line--middle"
                    d="M20.5 23.5H.4755"
                    stroke-width="3"
                  />
                  <path
                    class="car__line car__line--bottom"
                    d="M25.5 9.5h-19"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <span className="name p-2">KALAKS</span>
            </div>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/cars">
              CARS
            </NavLink>
            <NavLink className="nav-link" to="/accessories">
              ACCESSORIES
            </NavLink>
            <NavLink className="nav-link" to="/schools">
              SCHOOLS
            </NavLink>
            <NavLink className="nav-link" to="/maintenance">
              MAINTENANCE
            </NavLink>
          </Nav>
          <Nav>
            <NavLink id="lastnav" to="/login">
              <i class="fas fa-user-circle"></i>
            </NavLink>
            {/* <NavLink id="lastnav" to="/cart">
              <i class="fas fa-cart"></i>
            </NavLink> */}
          </Nav>
          {cartQuantity > 0 && (
            <Button
              style={{
                width: "2.5rem",
                height: "2.5rem",
                position: "relative",
              }}
              variant="outline-primary"
              className="rounded-circle"
              onClick={openCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
          {/* <Nav>
            <NavLink to="/cart">
              <span className="cart-icon relative">
                <BsCart3 />
                <span className="cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 font-medium rounded-full w-5 h-5 flex justify-center items-center z-[1]"></span>
              </span>
            </NavLink>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
