import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { signInSuccess, fetchSongRequestsSuccess } from './user.actions'
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

function* insertSongRequest({ payload }) {
	try {
		yield put(setSubmitting(true))
		yield post('songRequests/create', payload)
		yield put(setAlert({
			type: 'success',
			title: 'PEDIDO DE MÚSICA REALIZADO!',
		}))
	} catch (error) {
		const { message } = error
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO PEDIR MÚSICA',
			message: message || JSON.stringify(error),
		}))
	}
	yield put(setSubmitting(false))
}

function* fetchSongRequests() {
	try {
		const songRequests = yield get('songRequests')
		yield put(fetchSongRequestsSuccess(songRequests))
	} catch (error) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PEDIDOS DE MÚSICA',
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

function* onInsertSongRequestStart() {
	yield takeLatest(UserActionTypes.INSERT_SONG_REQUEST_START, insertSongRequest)
}

function* onFetchSongRequestsStart() {
	yield takeLatest(UserActionTypes.FETCH_SONG_REQUESTS_START, fetchSongRequests)
}

export default function* userSagas() {
	yield all([
		call(onSignInWithFacebookStart),
		call(onSignInWithGoogleStart),
		call(onInsertSongRequestStart),
		call(onFetchSongRequestsStart),
	])
}