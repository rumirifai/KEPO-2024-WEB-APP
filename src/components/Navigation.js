import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Container fluid="md" className="myContainer">
          <Navbar.Brand>
            <img
              src="/img/kepo/logo.png"
              alt="Logo"
              width="47px"
              height="49.19px"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link>INFO PTN</Nav.Link>
            <Nav.Link>ABOUT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
