import UserActionTypes from './user.types'

const INITIAL_STATE = {
	currentUser: null,
	confirmations: null,
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
		case UserActionTypes.FETCH_CONFIRMATIONS_SUCCESS:
			return {
				...state,
				confirmations: action.payload,
			}
		default:
			return state
	}
}

export default userReducer