import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { signInSuccess } from './user.actions'
import { setAlert } from '../app/app.actions'

function* signIn({ payload }) {
	try {
		yield put(signInSuccess(payload))
	} catch (error) {
		yield put(setAlert(error))
	}
}

function* onSignInStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export default function* userSagas() {
	yield all([
		call(onSignInStart),
	])
}