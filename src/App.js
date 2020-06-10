import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import CustomNavBar from './components/CustomNavBar'
import AppAlert from './components/AppAlert'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'
import InsertProductPage from './pages/InsertProduct'
import ProductsPage from './pages/Products'

const App = () => (
	<>
		<AppAlert />
		<CustomNavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<ProtectedRoute exact path="/sign-in" component={SignInPage} forGuestsOnly />
			<ProtectedRoute exact path="/insert-product" component={InsertProductPage} />
			<Route exact path="/products" component={ProductsPage} />
		</Switch>
	</>
)

export default App