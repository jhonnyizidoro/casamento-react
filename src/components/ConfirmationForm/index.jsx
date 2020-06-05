import React, { useState } from 'react'

import CustomForm from '../CustomForm'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import CustomDivider from '../CustomDivider'
import CustomContainer from '../CustomContainer'

const ConfirmationForm = () => {
	const [guest, setGuest] = useState({})

	const handleChange = ({ target }) => {
		const { name, value } = target
		setGuest({
			...guest,
			[name]: value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		console.log(guest)
	}

	return (
		<CustomContainer>
			<CustomDivider />
			<CustomForm onSubmit={handleSubmit} title="Confirme sua presença">
				<FormInput
					name="name"
					placeholder="Nome completo"
					onChange={handleChange}
				/>
				<FormInput
					name="cpf"
					placeholder="CPF"
					onChange={handleChange}
				/>
				<FormInput
					name="song"
					placeholder="Pedido de música"
					onChange={handleChange}
				/>
				<CustomButton type="submit" color="orange">CONFIRMAR PRESENÇA</CustomButton>
			</CustomForm>
			<CustomDivider />
		</CustomContainer>
	)
}

export default ConfirmationForm