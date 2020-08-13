import ProductActionTypes from './product.types'

export const insertProductStart = product => ({
	type: ProductActionTypes.INSERT_PRODUCT_START,
	payload: product,
})

export const fetchProductsStart = () => ({
	type: ProductActionTypes.FETCH_PRODUCTS_START,
})

export const fetchProductsSuccess = products => ({
	type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
	payload: products,
})

export const fetchProductStart = id => ({
	type: ProductActionTypes.FETCH_PRODUCT_START,
	payload: id,
})

export const fetchProductSuccess = product => ({
	type: ProductActionTypes.FETCH_PRODUCT_SUCCESS,
	payload: product,
})