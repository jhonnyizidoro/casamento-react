import OrderActionTypes from './order.types'

export const createOrderStart = order => ({
	type: OrderActionTypes.CREATE_ORDER_START,
	payload: order,
})

export const fetchUserOrdersStart = userId => ({
	type: OrderActionTypes.FETCH_USER_ORDERS_START,
	payload: userId,
})

export const fetchUserOrdersSuccess = userOrders => ({
	type: OrderActionTypes.FETCH_USER_ORDERS_SUCCESS,
	payload: userOrders,
})

export const fetchOrdersStart = () => ({
	type: OrderActionTypes.FETCH_ORDERS_START,
})

export const fetchOrdersSuccess = orders => ({
	type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
})

export const fetchStatesStart = () => ({
	type: OrderActionTypes.FETCH_STATES_START,
})

export const fetchStatesSuccess = states => ({
	type: OrderActionTypes.FETCH_STATES_SUCCESS,
	payload: states,
})

export const fetchCitiesStart = state => ({
	type: OrderActionTypes.FETCH_CITIES_START,
	payload: state,
})

export const fetchCitiesSuccess = cities => ({
	type: OrderActionTypes.FETCH_CITIES_SUCCESS,
	payload: cities,
})