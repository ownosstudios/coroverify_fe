import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {logOutUser, signIn} from '../../utils/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    return (
        <section className="full">
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
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

                            <Button variant="primary" onClick={(e) => signIn(email, password, e, role)}>Submit</Button>
                            <Button variant="danger" onClick={logOutUser}>Logout</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login