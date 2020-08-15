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

export const insertSongRequestStart = songRequest => ({
	type: UserActionTypes.INSERT_SONG_REQUEST_START,
	payload: songRequest,
})

export const fetchSongRequestsStart = () => ({
	type: UserActionTypes.FETCH_SONG_REQUESTS_START,
})

export const fetchSongRequestsSuccess = songRequests => ({
	type: UserActionTypes.FETCH_SONG_REQUESTS_SUCCESS,
	payload: songRequests,
})