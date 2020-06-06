import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selectors'

import CustomNavBar from './components/CustomNavBar'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'

const App = ({ currentUser }) => (
	<>
		<CustomNavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/sign-in" render={() =>
				currentUser ?
					<Redirect to="/" />
					:
					<SignInPage />
			} />
		</Switch>
	</>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App)