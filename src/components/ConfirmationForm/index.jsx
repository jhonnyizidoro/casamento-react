import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectSubmitting } from '../../redux/app/app.selectors'
import { insertConfirmationStart } from '../../redux/user/user.actions'

import CustomForm from '../CustomForm'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import CustomDivider from '../CustomDivider'
import CustomContainer from '../CustomContainer'

const ConfirmationForm = ({ currentUser, insertConfirmationStart, submitting }) => {
	const [confirmation, setConfirmation] = useState(null)

	const handleChange = ({ target }) => {
		const { name, value } = target
		setConfirmation({
			...confirmation,
			[name]: value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		const { email, displayName } = currentUser
		insertConfirmationStart({
			email,
			displayName,
			...confirmation,
		})
	}

	return (
		<CustomContainer>
			<CustomDivider />
			<CustomForm onSubmit={handleSubmit} title="Confirmação de presença">
				<FormInput
					name="guest"
					placeholder="Nome do convidado"
					onChange={handleChange}
					required
					disabled={currentUser === null}
				/>
				<FormInput
					name="song"
					placeholder="Pedido de música"
					onChange={handleChange}
					required
					disabled={currentUser === null}
				/>
				{
					currentUser ?
						<CustomButton
							type="submit"
							color="orange"
							isLoading={submitting}
						>
							CONFIRMAR PRESENÇA
						</CustomButton>
						:
						<CustomButton to="/sign-in" color="orange">FAÇA O LOGIN PARA CONFIRMAR</CustomButton>
				}
			</CustomForm>
			<CustomDivider />
		</CustomContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	submitting: selectSubmitting,
})

const mapDispatchToProps = dispatch => ({
	insertConfirmationStart: confirmation => dispatch(insertConfirmationStart(confirmation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationForm)