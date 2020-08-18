import React from 'react'

import { FormInputElement } from './styles'

const FormInput = ({ placeholder, ...otherProps }) => (
	<FormInputElement
		placeholder={placeholder}
		aria-label={placeholder}
		{...otherProps}
	/>
)

export default FormInput