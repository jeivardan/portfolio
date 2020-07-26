import React, {Component}  from 'react';
import {Navbar, NavItem, NavLink, NavbarToggler, Collapse, Nav, NavbarBrand} from 'reactstrap'; 

export default class Navigation extends Component{
    constructor(props) {
        
        super(props);
        
        this.state = {
          isOpen: false,
          setIsOpen: false,
        }
        
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <React.Fragment>
                <Navbar color="dark" expand="sm" fixed="top">
                <NavbarBrand href="#home" className="p-0"><p class="font-weight-bold text-primary">Home</p></NavbarBrand>
                <NavbarToggler onClick={this.toggle} className='ml-auto bg-primary'>=</NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar className='justify-content-center'>
                    <Nav className="p-1 w-100 justify-content-end" navbar>
                    <NavItem>
                        <NavLink href="#about" onClick={this.toggle}><p class="font-weight-bold text-primary">About me</p></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects" onClick={this.toggle}><p class="font-weight-bold text-primary">Projects</p></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact" onClick={this.toggle}><p class="font-weight-bold text-primary">Contact</p></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

  
