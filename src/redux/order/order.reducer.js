import OrderActionTypes from './order.types'

const INITIAL_STATE = {
	userOrders: null,
	orders: null,
	states: null,
	cities: null,
}

const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrderActionTypes.FETCH_USER_ORDERS_SUCCESS:
			return {
				...state,
				userOrders: action.payload,
			}
		case OrderActionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.payload,
			}
		case OrderActionTypes.FETCH_STATES_SUCCESS:
			return {
				...state,
				states: action.payload,
			}
		case OrderActionTypes.FETCH_CITIES_SUCCESS:
			return {
				...state,
				cities: action.payload,
			}
		default:
			return state
	}
}

export default orderReducer