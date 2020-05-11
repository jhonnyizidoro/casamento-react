import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)