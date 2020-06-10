import { takeLatest, put, all, call } from 'redux-saga/effects'
import ProductActionTypes from './product.types'
import { setAlert } from '../app/app.actions'

function* insertProduct({ payload }) {
	yield put(setAlert(payload))
}

function* onInsertProductStart() {
	yield takeLatest(ProductActionTypes.INSERT_PRODUCT_START, insertProduct)
}

export default function* productSagas() {
	yield all([
		call(onInsertProductStart),
	])
}