import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import appReducer from './app/app.reducer'
import productReducer from './product/product.reducer'
import orderReducer from './order/order.reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'user',
	],
}

const rootReducer = combineReducers({
	user: userReducer,
	app: appReducer,
	product: productReducer,
	order: orderReducer,
})

export default persistReducer(persistConfig, rootReducer)