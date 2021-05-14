import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {signIn} from '../../utils/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <section className="full">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md="3"></Col>
                    <Col md="6" className="d-flex align-items-center">
                        <Form className="w-100">
                            <h1 className="p-3">Login</h1>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                            </Form.Group>

                            <Button variant="secondary" onClick={(e) => signIn(email, password, e)}>Submit</Button>
                            <div>
                                <small>Don't have an account? <a href="/signup">Create new account</a></small>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login