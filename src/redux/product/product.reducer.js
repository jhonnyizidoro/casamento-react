import ProductActionTypes from './product.types'

const INITIAL_STATE = {
	products: null,
	product: null,
}

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
			}
		case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				product: action.payload,
			}
		default:
			return state
	}
}

export default productReducer