import { takeLatest, put, all, call } from 'redux-saga/effects'
import ProductActionTypes from './product.types'
import { setAlert } from '../app/app.actions'
import { firestore } from '../../utils/firebase'

function* insertProduct({ payload }) {
	try {
		yield firestore.collection('products').add(payload)
		yield put(setAlert({
			type: 'success',
			title: 'PRODUTO INSERIDO COM SUCESSO!',
		}))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO CADASTRAR PRODUTO',
			message,
		}))
	}
}

function* onInsertProductStart() {
	yield takeLatest(ProductActionTypes.INSERT_PRODUCT_START, insertProduct)
}

export default function* productSagas() {
	yield all([
		call(onInsertProductStart),
	])
}