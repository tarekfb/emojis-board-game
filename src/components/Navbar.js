import React, {useContext} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';

// import ThemeContext from "../Contexts/ThemeContext";

const NavbarComponent = ({ returnToStart }) => {
  // const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand onClick={returnToStart}>TEAM JAT</Navbar.Brand>
      {/*<DarkModeToggle*/}
      {/*  onChange={setIsDarkMode}*/}
      {/*  checked={isDarkMode}*/}
      {/*  size={60}*/}
      {/*/>*/}
      <Button className="ml-auto" variant="outline-info" onClick={returnToStart}>Quit</Button>
    </Navbar>
  )
};

export default NavbarComponent;

/*
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 */

/*
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
 */