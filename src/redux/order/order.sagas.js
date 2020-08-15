import { takeLatest, put, all, call } from 'redux-saga/effects'
import OrderActionTypes from './order.types'
import { setAlert } from '../app/app.actions'
import { post, get } from '../../utils/api'
import { fetchOrdersSuccess } from './order.actions'

function* createOrder({ payload }) {
	try {
		const { id } = yield post('create', payload)
		yield put(setAlert({
			type: 'success',
			title: 'PEDIDO CRIADO COM SUCESSO',
			message: `Seu pedido número ${id} foi criado com sucesso.`,
		}))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO CRIAR PEDIDO',
			message,
		}))
	}
}

function* fetchOrders({ payload }) {
	try {
		const orders = yield get(`orders/${payload}`)
		yield put(fetchOrdersSuccess(orders))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PEDIDOS',
			message,
		}))
	}
}

function* onCreateOrderStart() {
	yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder)
}

function* onFetchOrdersStart() {
	yield takeLatest(OrderActionTypes.FETCH_ORDERS_START, fetchOrders)
}

export default function* orderSagas() {
	yield all([
		call(onCreateOrderStart),
		call(onFetchOrdersStart),
	])
}