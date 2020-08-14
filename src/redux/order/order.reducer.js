import OrderActionTypes from './order.types'

const INITIAL_STATE = {
	orders: null,
}

const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrderActionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.payload,
			}
		default:
			return state
	}
}

export default orderReducer