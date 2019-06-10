import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';

class Header extends Component{
    constructor(){
        super();
        this.state = { 
            date: new Date(),
            isOpen: false
        };
        setInterval(() => {
            this.tick();
        }, 1000);

        this.toggle = this.toggle.bind(this);
    }

    tick() {
        this.setState({ date: new Date()});
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Project Manager</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>{this.state.date.toLocaleTimeString()}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header