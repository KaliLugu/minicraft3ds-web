import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Minicraft3ds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/KaliLugu/Minicraft3DS">github</Nav.Link>
            <Nav.Link href="https://github.com/KaliLugu/Minicraft3DS/releases">Download</Nav.Link>
            <Nav.Link href="/development">development</Nav.Link>
            <Nav.Link href="#link">Changelog</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/KaliLugu/Minicraft3DS/tree/master/docs">
                technical source code documentation
              </NavDropdown.Item>
              <NavDropdown.Item href="/roadmap">
                future of minicraft3ds ?
              </NavDropdown.Item>
              <NavDropdown.Item href="/contributing">
                how to contribute ?
              </NavDropdown.Item>
              <NavDropdown.Item href="/mods">
                mods
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lang" id="basic-nav-dropdown">
              <NavDropdown.Item href="#fr">
                français
              </NavDropdown.Item>
              <NavDropdown.Item href="#en">
                english
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
