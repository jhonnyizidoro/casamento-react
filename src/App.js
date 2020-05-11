import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CustomNavBar from './components/CustomNavBar'
import HomePage from './pages/Home'

const App = () => (
	<>
		<CustomNavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
		</Switch>
	</>
)

export default App