import React from 'react'

import { FormSelectElement, FormSelectOption } from './styles'

const FormSelect = ({ items, placeholder, ...otherProps }) => (
	<FormSelectElement {...otherProps}>
		{
			placeholder && <FormSelectOption value="">{placeholder}</FormSelectOption>
		}
		{
			items.map(item => <FormSelectOption
					key={item.value}
					value={item.value}
				>
					{item.label}
				</FormSelectOption>,
			)
		}
	</FormSelectElement>
)

export default FormSelect