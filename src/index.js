import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'

import GlobalStyles from './assets/styles/global'

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles />
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)