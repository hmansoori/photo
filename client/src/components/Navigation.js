import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const brandStyle = {
    fontFamily: 'Pacifico',
    color: 'white'
};

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={brandStyle}><Link to={routes.HOME}>Hannah Mansoori</Link></Navbar.Brand>
                <Container>
                    <Col>
                        <Nav className='justify-content-end'>
                            <Link className='navLink' to={routes.PHOTOS}>Photography</Link>
                            <Link className='navLink' to={routes.ABOUT}>About</Link>
                            <Link className='navLink' to={routes.CONTACT}>Contact</Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;