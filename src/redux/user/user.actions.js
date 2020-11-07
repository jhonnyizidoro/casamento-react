import UserActionTypes from './user.types'

export const signInWithFacebookStart = () => ({
	type: UserActionTypes.SIGN_IN_WITH_FACEBOOK_START,
})

export const signInWithGoogleStart = () => ({
	type: UserActionTypes.SIGN_IN_WITH_GOOGLE_START,
})

export const signInSuccess = currentUser => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: currentUser,
})

export const logout = () => ({
	type: UserActionTypes.LOGOUT,
})

export const insertConfirmationStart = confirmation => ({
	type: UserActionTypes.INSERT_CONFIRMATION_START,
	payload: confirmation,
})

export const fetchConfirmationsStart = () => ({
	type: UserActionTypes.FETCH_CONFIRMATIONS_START,
})

export const fetchConfirmationsSuccess = confirmations => ({
	type: UserActionTypes.FETCH_CONFIRMATIONS_SUCCESS,
	payload: confirmations,
})