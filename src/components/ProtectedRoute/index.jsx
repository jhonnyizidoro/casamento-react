import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors'

const ProtectedRoute = ({ currentUser, component: Component, forGuestsOnly = false, ...otherProps }) => (
	<Route {...otherProps} render={() => {
		if (currentUser && forGuestsOnly) {
			return <Redirect to="/" />
		} else if (!currentUser && !forGuestsOnly) {
			return <Redirect to="/sign-in" />
		}
		return <Component />
	}} />
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(ProtectedRoute)