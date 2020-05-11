import AppActionTypes from './app.types'

export const setAlert = alert => ({
	type: AppActionTypes.SET_ALERT,
	payload: alert,
})