import React from 'react'
import { connect } from 'react-redux'

import { signInWithGoogleStart, signInWithFacebookStart } from '../../redux/user/user.actions'

import CustomButton from '../CustomButton'

import { SignInButtonsContainer, SignInButtonsTitle, SignInButtonsSubtitle } from './styles'

const SignInButtons = ({ signInWithGoogleStart, signInWithFacebookStart }) => (
	<SignInButtonsContainer>
		<SignInButtonsTitle>Faça seu login</SignInButtonsTitle>
		<SignInButtonsSubtitle>Escolha uma das formas abaixo para se autenticar.</SignInButtonsSubtitle>
		<CustomButton color="facebook" marginBottom={10} onClick={signInWithFacebookStart}>LOGIN COM FACEBOOK</CustomButton>
		<CustomButton color="google" onClick={signInWithGoogleStart}>LOGIN COM GOOGLE</CustomButton>
	</SignInButtonsContainer>
)

const mapDispatchToProps = dispatch => ({
	signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
	signInWithFacebookStart: () => dispatch(signInWithFacebookStart()),
})

export default connect(null, mapDispatchToProps)(SignInButtons)