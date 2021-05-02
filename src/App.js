// Deps imports
import React from 'react'
// import {} from 'react-bootstrap'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from "history"

// Component(s) imports
import NavBar from './components/navbar'

// Page(s) imports
import {Login, Signup} from './pages/auth'

// Misc util(s) imports
import './utils/index.scss'

// Variable declarations
const hist = createBrowserHistory()
const fullClass = document.getElementsByClassName('full')
for (let i=0;i < fullClass.length;i++) {
	fullClass[i].style.height = window.innerHeight
}
// main App component
const App = () => {
	return (
		<>
		<NavBar />
		<div className="banner" />
		<Router history={hist}>
			<Switch>
				<Route path="/login" exact component={() => (<Login />)} />
				<Route path="/signup" exact component={() => (<Signup />)} />
			</Switch>
		</Router>
		</>
	)
}

export default App;
