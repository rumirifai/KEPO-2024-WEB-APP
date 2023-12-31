import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container className="myContainer">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/img/kepo/logo.png"
                alt="Logo"
                width="37px"
                height="39.19px"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="border-0">
            <Nav className="navbarLinked">
              <div className="d-lg-none">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </div>
              <Link to="/info" className="nav-link">
                INFO PTN
              </Link>
              <Link to="/about" className="nav-link">
                ABOUT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
