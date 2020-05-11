import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'

import App from './App'

import GlobalStyles from './assets/styles/global'

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)