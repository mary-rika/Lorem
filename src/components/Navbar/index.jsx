import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className="header">
        <Container>
          <Navbar expand="lg">
            <NavbarBrand className="logo" href="/">
              <div className="logo--star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="logo--text">LOGO</p>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} ><i className="fas fa-bars"></i></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>ABOUT US</DropdownToggle>
                  <DropdownMenu className="navbar-dropdown" right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/news/">NEWS</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    PUBLICATIONS
                  </DropdownToggle>
                  <DropdownMenu className="navbar-dropdown" right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/contact-us/">CONTACT US</NavLink>
                </NavItem>
                <div className="search--wrapper">
                  <input className="search--input" type="text" placeholder="Search"/>
                  <i className="fas fa-search"></i>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}