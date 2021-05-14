import React from 'react'
import {MdSettings} from 'react-icons/md'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import {currentUser, logOutUser} from "../../utils/auth";

const NavBar = ({auth}) => {
    const user = currentUser()
    return (
        <Navbar bg="primary" fixed="top" expand="md">
            <Navbar.Brand>CoroVerify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-md-auto ml-auto">
                        <Nav.Link>Resources Feed</Nav.Link>
                        <Nav.Link>Useful Links</Nav.Link>
                        <Nav.Link>Donate</Nav.Link>
                        {!user ?
                            <Nav.Link href="/login">Login</Nav.Link>
                        :
                            <></>
                        }
                        {/* <Nav.Link></Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                {user ? 
                    <Dropdown className="noChev">
                        <Dropdown.Toggle variant="outline-dark">
                            <MdSettings />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="right">
                            <Dropdown.Item as="button" onClick={logOutUser}>Logout</Dropdown.Item>
                            {/* <Dropdown.Item as="button" onClick={}>Delete account</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                :
                    <></>
                }
        </Navbar>
    )
}

export default NavBar