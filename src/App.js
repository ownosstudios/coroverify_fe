import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {handleAuth, getAuth} from 'utils/auth'
import 'utils/index.scss'

const App = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<Container>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
			</Form.Group>
			<Button variant="success" onClick={(e) => {e.preventDefault();handleAuth(email, password)}}>Submit</Button>
			<Button variant="dark" onClick={getAuth}>Get token</Button>
		</Container>
	)
}

export default App;
