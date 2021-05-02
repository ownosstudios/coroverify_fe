import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {logOutUser} from '../../utils/auth'

const Login = () => {
    return (
        <section className="full">
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary">Submit</Button>
                            <Button variant="danger" onClick={logOutUser}>Logout</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login