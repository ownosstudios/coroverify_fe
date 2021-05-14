import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {signUpEmail} from '../../utils/auth'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    return (
        <section className="full">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md="3"></Col>
                    <Col md="6" className="d-flex align-items-center">
                        <Form className="w-100">
                            <h1 className="p-3">Sign up</h1>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" onChange={(e) => {setRole(e.target.value)}}>
                                    <option value=''>Select a Role</option>
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="volunteer">Volunteer</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="secondary" onClick={(e) => signUpEmail(email, password, role, e)}>
                                Submit
                            </Button>
                            <div>
                                <small>Already have an account? <a href="/login">Login</a></small>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Signup