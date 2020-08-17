import AppActionTypes from './app.types'

const INITIAL_STATE = {
	alert: null,
	navBarState: false,
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AppActionTypes.SET_ALERT:
			return {
				...state,
				alert: action.payload,
			}
		case AppActionTypes.SET_NAV_BAR_STATE:
			return {
				...state,
				navBarState: action.payload,
			}
		default:
			return state
	}
}

export default appReducer