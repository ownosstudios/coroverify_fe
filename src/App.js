import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import axios from './axiosurl'
import firebase from './firebase'

const App = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleAuth = () => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((user) => {
			if (user) {
				axios.post('/auth', {token: user.user.uid, claims: {helperType: 'distributor'}})
				.then((res) => {
					// console.log(res.data.token)
					// getAuth(res.token)
					window.localStorage.setItem('token', res.data.token)
				})
				.catch((err) => {
					console.log(err)
				})
			}
		})
	}
	const getAuth = () => {
		// axios.get('/auth').then((res) => {
		// 	console.log(res)
		// })
		// .catch((err) => {
		// 	console.log(err)
		// })
		const token = window.localStorage.getItem('token')
		// firebase.auth().signInWithCustomToken(token)
		// .then((user)=> {
		// 	console.log('user?', user)
		// })
		// .catch((err) => {
		// 	console.log(err)
		// })
		axios.get(`/auth/${token}`)
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}
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
			<Button variant="success" onClick={handleAuth}>Submit</Button>
			<Button variant="dark" onClick={getAuth}>Get token</Button>
		</Container>
	)
}

export default App;
