import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { insertSongRequestStart } from '../../redux/user/user.actions'

import CustomForm from '../CustomForm'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import CustomDivider from '../CustomDivider'
import CustomContainer from '../CustomContainer'

const SongRequestForm = ({ currentUser, insertSongRequestStart }) => {
	const [song, setSong] = useState(null)

	const handleChange = ({ target: { value } }) => setSong(value)

	const handleSubmit = event => {
		event.preventDefault()
		const { email, uid, displayName } = currentUser
		insertSongRequestStart({
			song,
			email,
			uid,
			displayName,
			createdAt: new Date(),
		})
	}

	return (
		<CustomContainer>
			<CustomDivider />
			<CustomForm onSubmit={handleSubmit} title="Peça uma música">
				<FormInput
					name="song"
					placeholder="Pedido de música"
					onChange={handleChange}
					required
					disabled={currentUser === null}
				/>
				{
					currentUser ?
						<CustomButton type="submit" color="orange">CONFIRMAR PEDIDO</CustomButton>
						:
						<CustomButton to="/sign-in" color="orange">FAÇA O LOGIN PARA PEDIR MÚSICA</CustomButton>
				}
			</CustomForm>
			<CustomDivider />
		</CustomContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	insertSongRequestStart: songRequest => dispatch(insertSongRequestStart(songRequest)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongRequestForm)