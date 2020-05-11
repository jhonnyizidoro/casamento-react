import AppActionTypes from './app.types'

const INITIAL_STATE = {
	alert: null,
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AppActionTypes.SET_ALERT:
			return {
				...state,
				alert: action.payload,
			}
		default:
			return state
	}
}

export default appReducer