import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={routes.HOME}>Hannah Mansoori</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li>
                            <Link to={routes.PHOTOS}>
                                Photography
                        </Link>
                        </li>
                        <li>
                            <Link to={routes.ABOUT}>
                                About
                        </Link>
                        </li>
                        <li>
                            <Link to={routes.CONTACT}>
                                Contact
                            </Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;