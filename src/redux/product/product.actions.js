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