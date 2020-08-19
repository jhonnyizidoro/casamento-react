import AppActionTypes from './app.types'

export const setAlert = alert => ({
	type: AppActionTypes.SET_ALERT,
	payload: alert,
})

export const setNavBarState = state => ({
	type: AppActionTypes.SET_NAV_BAR_STATE,
	payload: state,
})

export const setSubmitting = submitting => ({
	type: AppActionTypes.SET_SUBMITTING,
	payload: submitting,
})