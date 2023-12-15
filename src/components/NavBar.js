import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const navStyle = {
    backgroundColor: '#f3f3f3',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <Navbar expand="sm" style={navStyle} variant="light">
      <Navbar.Brand>
        <Link to="/" style={linkStyle}>Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/add-task" style={linkStyle}>Add Task</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/all-tasks" style={linkStyle}>All Tasks</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
