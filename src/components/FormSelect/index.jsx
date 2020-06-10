import React from 'react'

import { FormSelectElement, FormSelectOption } from './styles'

const FormSelect = ({ items, placeholder, ...otherProps }) => (
	<FormSelectElement {...otherProps}>
		<FormSelectOption value="">{placeholder}</FormSelectOption>
		{
			items.map(item => <FormSelectOption key={item}>{item}</FormSelectOption>)
		}
	</FormSelectElement>
)

export default FormSelect