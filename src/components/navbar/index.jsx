import React from 'react'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {currentUser} from "../../utils/auth";

const NavBar = ({auth}) => {
    const author = currentUser()
    // console.log(author)
    return (
        <Navbar fixed="top">
            <Navbar.Brand>CoroVerify</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Link</Nav.Link>
                </Nav>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                {author ? `Hello, ${author.email}` : 'Sign up'}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar