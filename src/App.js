import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import CustomNavBar from './components/CustomNavBar'
import AppAlert from './components/AppAlert'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'
import InsertProductPage from './pages/InsertProduct'
import ProductsPage from './pages/Products'
import PaymentPage from './pages/Payment'
import MyOrdersPage from './pages/MyOrders'
import OrdersPage from './pages/Orders'
import SongRequestsPage from './pages/SongRequests'

const App = () => (
	<>
		<AppAlert />
		<CustomNavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<ProtectedRoute exact path="/sign-in" component={SignInPage} forGuestsOnly />
			<ProtectedRoute exact path="/insert-product" component={InsertProductPage} />
			<Route exact path="/products" component={ProductsPage} />
			<ProtectedRoute exact path="/payment/:id" component={PaymentPage} />
			<ProtectedRoute exact path="/my-orders" component={MyOrdersPage} />
			<ProtectedRoute exact path="/orders" component={OrdersPage} />
			<ProtectedRoute exact path="/song-requests" component={SongRequestsPage} />
		</Switch>
	</>
)

export default App