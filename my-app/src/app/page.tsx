"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './style.css';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// --- Top Menu ---
const TopMenu = () => (
  <Navbar bg="light" expand="sm">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#"><i className="bi bi-facebook p-1"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-twitter p-1"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-pinterest p-1"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-instagram p-1"></i></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#"><i className="bi bi-house-fill p-1"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-search p-1"></i></Nav.Link>
        <Nav.Link href="#"><i className="bi bi-person-fill p-1"></i></Nav.Link>
        <NavDropdown title={<span><i className="bi bi-cart p-1"></i> 0</span>} id="cart-dropdown">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

// --- Logo Section ---
const IslandSnowLogo = () => (
  <div className="row">
    <div className="col">
      <img
        src="/island-snow-logo.png"
        alt="Island Snow Logo"
        className="img-fluid rounded mx-auto d-block py-3"
      />
    </div>
  </div>
);

// --- Middle Menu ---
const menuItems = ["MEN", "WOMEN", "KIDS", "BRANDS", "SEARCH"];
const MiddleMenu = () => (
  <div className="row justify-content-center pt-4">
    {menuItems.map((item) => (
      <div className="col-1" key={item}>
        <div className="dropdown">
          <div className="dropdown-toggle"><strong>{item}</strong></div>
        </div>
      </div>
    ))}
  </div>
);

// --- Full Width Image ---
const FullWidthImage = () => (
  <div className="row justify-content-center">
    <img
      src="/bridge-for-island-snow.png"
      alt="Model Sitting on Bridge"
      className="img-fluid"
    />
  </div>
);

// --- Footer ---
const FooterMenu = () => (
  <footer>
    <div className="container py-4">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Navigation</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Employment</a></li>
            <li><a href="#">Videos</a></li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Main Menu</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase">Connect</h5>
          <hr />
          <form className="d-flex">
            <input type="text" className="form-control me-2" placeholder="Enter Email Address" />
            <button type="submit" className="btn btn-dark">Join</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page ---
export default function Home() {
  return (
    <main>
      <Container fluid>
        <TopMenu />
        <IslandSnowLogo />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />
      </Container>
    </main>
  );
}
