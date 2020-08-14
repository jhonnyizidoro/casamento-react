import OrderActionTypes from './order.types'

export const createOrderStart = order => ({
	type: OrderActionTypes.CREATE_ORDER_START,
	payload: order,
})

export const fetchOrdersStart = userId => ({
	type: OrderActionTypes.FETCH_ORDERS_START,
	payload: userId,
})

export const fetchOrdersSuccess = orders => ({
	type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
})