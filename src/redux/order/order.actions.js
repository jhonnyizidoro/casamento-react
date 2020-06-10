import OrderActionTypes from './order.types'

export const insertOrderStart = order => ({
	type: OrderActionTypes.INSERT_ORDER_START,
	payload: order,
})