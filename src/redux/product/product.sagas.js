import { takeLatest, put, all, call } from 'redux-saga/effects'
import ProductActionTypes from './product.types'
import { setAlert } from '../app/app.actions'
import { firestore } from '../../utils/firebase'
import { fetchProductsSuccess, fetchProductSuccess } from './product.actions'

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

function* fetchProducts() {
	try {
		const snapshot = yield firestore.collection('products').get()
		const products = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		yield put(fetchProductsSuccess(products))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PRODUTOS',
			message,
		}))
	}
}

function* fetchProduct({ payload }) {
	try {
		const doc = yield firestore.collection('products').doc(payload).get()
		const product = { ...doc.data(), id: doc.id }
		yield put(fetchProductSuccess(product))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PRODUTO',
			message,
		}))
	}
}

function* onInsertProductStart() {
	yield takeLatest(ProductActionTypes.INSERT_PRODUCT_START, insertProduct)
}

function* onFetchProductsStart() {
	yield takeLatest(ProductActionTypes.FETCH_PRODUCTS_START, fetchProducts)
}

function* onFetchProductStart() {
	yield takeLatest(ProductActionTypes.FETCH_PRODUCT_START, fetchProduct)
}

export default function* productSagas() {
	yield all([
		call(onInsertProductStart),
		call(onFetchProductsStart),
		call(onFetchProductStart),
	])
}