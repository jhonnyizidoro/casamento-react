import { takeLatest, put, all, call } from 'redux-saga/effects'
import OrderActionTypes from './order.types'
import { setAlert } from '../app/app.actions'
import { firestore } from '../../utils/firebase'

function* insertOrder({ payload }) {
	try {
		yield firestore.collection('orders').add(payload)
		yield put(setAlert({
			type: 'success',
			title: 'COMPRA EFETUADA COM SUCESSO (:',
		}))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'Error',
			title: 'ERRO AO SALVAR DADOS DA COMPRA.',
			message: `Sua compra foi efetuada, mas não conseguimos armazenar os dados em nosso sistema [${message}]`,
		}))
	}
}

function* onInsertOrderStart() {
	yield takeLatest(OrderActionTypes.INSERT_ORDER_START, insertOrder)
}

export default function* orderSagas() {
	yield all([
		call(onInsertOrderStart),
	])
}