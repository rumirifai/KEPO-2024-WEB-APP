import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Container fluid="sm" className="myContainer">
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
          <Nav>
            <Link to="/info" className="nav-link">
              INFO PTN
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
