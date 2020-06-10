import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import CustomNavBar from './components/CustomNavBar'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'
import InsertProductPage from './pages/InsertProduct'

const App = () => (
	<>
		<CustomNavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<ProtectedRoute exact path="/sign-in" component={SignInPage} forGuestsOnly />
			<ProtectedRoute exact path="/insert-product" component={InsertProductPage} />
		</Switch>
	</>
)

export default App