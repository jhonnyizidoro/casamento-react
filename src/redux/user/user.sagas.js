import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { signInSuccess, fetchSongRequestsSuccess } from './user.actions'
import { setAlert } from '../app/app.actions'
import { auth, googleProvider, facebookProvider, firestore } from '../../utils/firebase'

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
		const { uid } = payload
		const oldSongRequest = yield firestore.collection('songRequests').where('uid', '==', uid).get()

		if (oldSongRequest.empty) {
			yield firestore.collection('songRequests').add(payload)
			yield put(setAlert({
				type: 'success',
				title: 'PEDIDO DE MÚSICA REALIZADO!',
			}))
		} else {
			yield put(setAlert({
				type: 'error',
				title: 'ERRO AO PEDIR MÚSICA',
				message: 'Cada convidado pode realizar apenas um pedido de música.',
			}))
		}
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO PEDIR MÚSICA',
			message,
		}))
	}
}

function* fetchSongRequests() {
	try {
		const snapshot = yield firestore.collection('songRequests').get()
		const songRequests = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		yield put(fetchSongRequestsSuccess(songRequests))
	} catch ({ message }) {
		yield put(setAlert({
			type: 'error',
			title: 'ERRO AO BUSCAR PEDIDOS DE MÚSICA',
			message,
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