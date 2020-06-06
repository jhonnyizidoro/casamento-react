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