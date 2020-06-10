import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { signInSuccess } from './user.actions'
import { setAlert } from '../app/app.actions'
import { auth, googleProvider, facebookProvider } from '../../utils/firebase'

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

function* onSignInWithFacebookStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_WITH_FACEBOOK_START, signInWithFacebook)
}

function* onSignInWithGoogleStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

export default function* userSagas() {
	yield all([
		call(onSignInWithFacebookStart),
		call(onSignInWithGoogleStart),
	])
}