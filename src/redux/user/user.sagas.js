import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { signInSuccess, fetchConfirmationsSuccess } from './user.actions'
import { setAlert, setSubmitting } from '../app/app.actions'
import { auth, googleProvider, facebookProvider } from '../../utils/firebase'
import { get, post } from '../../utils/api'

function* signInWithFacebook() {
	try {
		const { user } = yield auth.signInWithPopup(facebookProvider)
		yield put(signInSuccess(user))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO REALIZAR O LOGIN',
			message,
		}))
	}
}

function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield put(signInSuccess(user))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO REALIZAR O LOGIN',
			message,
		}))
	}
}

function* insertConfirmation({ payload }) {
	try {
		yield put(setSubmitting(true))
		yield post('confirmations/create', payload)
		yield put(setAlert({
			type: 'success',
			title: 'CONFIRMAÇÃO REALIZADA!',
		}))
	} catch (error) {
		const { message } = error
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO CONFIRMAR',
			message: message || JSON.stringify(error),
		}))
	}
	yield put(setSubmitting(false))
}

function* fetchConfirmations() {
	try {
		const confirmations = yield get('confirmations')
		yield put(fetchConfirmationsSuccess(confirmations))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR CONFIRMAÇÕES',
			message: JSON.stringify(error),
		}))
	}
}

function* onSignInWithFacebookStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_WITH_FACEBOOK_START, signInWithFacebook)
}

function* onSignInWithGoogleStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

function* onInsertConfirmationStart() {
	yield takeLatest(UserActionTypes.INSERT_CONFIRMATION_START, insertConfirmation)
}

function* onFetchConfirmationsStart() {
	yield takeLatest(UserActionTypes.FETCH_CONFIRMATIONS_START, fetchConfirmations)
}

export default function* userSagas() {
	yield all([
		call(onSignInWithFacebookStart),
		call(onSignInWithGoogleStart),
		call(onInsertConfirmationStart),
		call(onFetchConfirmationsStart),
	])
}