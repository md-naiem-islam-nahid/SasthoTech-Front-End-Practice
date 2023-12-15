import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../styles/navbar.module.css'; // Import the CSS module

const NavBar = () => {
  return (
    <Navbar expand="sm" className={styles.navbar}>
      <Container className="justify-content-center" style={{ maxWidth: '600px' }}>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link className={styles.navLink}>Home</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/add-task">
              <Nav.Link className={styles.navLink}>Add Task</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/all-tasks">
              <Nav.Link className={styles.navLink}>All Tasks</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
