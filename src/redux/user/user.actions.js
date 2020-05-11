import UserActionTypes from './user.types'

export const signInStart = credentials => ({
	type: UserActionTypes.SIGN_IN_START,
	payload: credentials,
})

export const signInSuccess = currentUser => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: currentUser,
})