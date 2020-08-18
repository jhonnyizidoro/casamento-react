import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyALY_ej8RtFE0cmmDcTq3q5PSQveE77ZPs',
	authDomain: 'casamento-jenyfer-e-leonardo.firebaseapp.com',
	databaseURL: 'https://casamento-jenyfer-e-leonardo.firebaseio.com',
	projectId: 'casamento-jenyfer-e-leonardo',
	storageBucket: 'casamento-jenyfer-e-leonardo.appspot.com',
	messagingSenderId: '497242569879',
	appId: '1:497242569879:web:b8af3c180773d917c7fdd2',
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export const firestore = firebase.firestore()