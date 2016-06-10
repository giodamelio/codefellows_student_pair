import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Student Pairs</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1} href="#">Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/courses">
                <NavItem eventKey={2} href="#">Courses</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default App;
