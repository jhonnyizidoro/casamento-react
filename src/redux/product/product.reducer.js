import ProductActionTypes from './product.types'

const INITIAL_STATE = {
	products: null,
}

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
			}
		default:
			return state
	}
}

export default productReducer