import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarCustom() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ color: "gray", marginRight: "5px" }}>
              Home
            </Link>

            <Link to="/users" style={{ color: "gray" }}>
              Users
            </Link>

            <Link to="/add-student" style={{ color: "gray", margin: "0 5px" }}>
              Add Student
            </Link>

            <Link to="/students" style={{ color: "gray", margin: "0 5px" }}>
              Students List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
