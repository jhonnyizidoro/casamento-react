import { takeLatest, put, all, call } from 'redux-saga/effects'
import OrderActionTypes from './order.types'
import { setAlert, setSubmitting } from '../app/app.actions'
import { post, get } from '../../utils/api'
import { getFromIBGE } from '../../utils/ibge'
import { fetchOrdersSuccess, fetchStatesSuccess, fetchCitiesSuccess } from './order.actions'

function* createOrder({ payload }) {
	try {
		const { id } = yield post('orders/create', payload)
		yield put(setAlert({
			type: 'success',
			title: 'PEDIDO CRIADO COM SUCESSO',
			message: `Seu pedido número ${id} foi criado com sucesso.`,
			buttonLink: '/my-orders',
		}))
		yield put(setSubmitting(false))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO CRIAR PEDIDO',
			message: JSON.stringify(error),
		}))
	}
}

function* fetchOrders({ payload }) {
	try {
		const orders = yield get(`orders/${payload}`)
		yield put(fetchOrdersSuccess(orders))
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
		const states = yield getFromIBGE('localidades/estados')
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
		const cities = yield getFromIBGE(`localidades/estados/${payload}/distritos`)
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
		call(onFetchStatesStart),
		call(onFetchCitiesStart),
	])
}