import { takeLatest, put, all, call } from 'redux-saga/effects'
import OrderActionTypes from './order.types'
import { setAlert, setSubmitting } from '../app/app.actions'
import { post, get } from '../../utils/api'
import { fetchOrdersSuccess, fetchStatesSuccess, fetchCitiesSuccess, fetchUserOrdersSuccess } from './order.actions'

function* createOrder({ payload }) {
	try {
		const { id } = yield post('orders/create', payload)
		yield put(setAlert({
			type: 'success',
			title: 'PEDIDO CRIADO COM SUCESSO',
			message: `Seu pedido número ${id} foi criado com sucesso.`,
			buttonLink: '/my-orders',
		}))
	} catch (error) {
		const { message } = error
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO CRIAR PEDIDO',
			message: message || JSON.stringify(error),
		}))
	}
	yield put(setSubmitting(false))
}

function* fetchOrders() {
	try {
		const orders = yield get(`orders`)
		yield put(fetchOrdersSuccess(orders))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PEDIDOS',
			message: JSON.stringify(error),
		}))
	}
}

function* fetchUserOrders({ payload }) {
	try {
		const orders = yield get(`orders/${payload}`)
		yield put(fetchUserOrdersSuccess(orders))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PEDIDOS',
			message: JSON.stringify(error),
		}))
	}
}

function* fetchStates() {
	try {
		const states = yield get('states')
		yield put(fetchStatesSuccess(states))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR ESTADOS',
			message: JSON.stringify(error),
		}))
	}
}

function* fetchCities({ payload }) {
	try {
		const cities = yield get(`states/cities/${payload}`)
		yield put(fetchCitiesSuccess(cities))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR CIDADES',
			message: JSON.stringify(error),
		}))
	}
}

function* onCreateOrderStart() {
	yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder)
}

function* onFetchOrdersStart() {
	yield takeLatest(OrderActionTypes.FETCH_ORDERS_START, fetchOrders)
}

function* onFetchUserOrdersStart() {
	yield takeLatest(OrderActionTypes.FETCH_USER_ORDERS_START, fetchUserOrders)
}

function* onFetchStatesStart() {
	yield takeLatest(OrderActionTypes.FETCH_STATES_START, fetchStates)
}

function* onFetchCitiesStart() {
	yield takeLatest(OrderActionTypes.FETCH_CITIES_START, fetchCities)
}

export default function* orderSagas() {
	yield all([
		call(onCreateOrderStart),
		call(onFetchOrdersStart),
		call(onFetchUserOrdersStart),
		call(onFetchStatesStart),
		call(onFetchCitiesStart),
	])
}