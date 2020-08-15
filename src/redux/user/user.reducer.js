import UserActionTypes from './user.types'

const INITIAL_STATE = {
	currentUser: null,
	songRequests: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
			}
		case UserActionTypes.LOGOUT:
			return {
				...state,
				currentUser: null,
			}
		case UserActionTypes.FETCH_SONG_REQUESTS_SUCCESS:
			return {
				...state,
				songRequests: action.payload,
			}
		default:
			return state
	}
}

export default userReducer