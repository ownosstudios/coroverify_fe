import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

const Signup = () => {
    return (
        <section>
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
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Signup