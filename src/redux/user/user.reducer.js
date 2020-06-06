import UserActionTypes from './user.types'

const INITIAL_STATE = {
	currentUser: null,
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
		default:
			return state
	}
}

export default userReducer