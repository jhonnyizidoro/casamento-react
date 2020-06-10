import ProductActionTypes from './product.types'

export const insertProductStart = product => ({
	type: ProductActionTypes.INSERT_PRODUCT_START,
	payload: product,
})