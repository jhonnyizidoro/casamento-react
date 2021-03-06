import React from 'react'

import { MoneyInputElement } from './styles'

const MoneyInput = ({ name, placeholder, onChange, ...otherProps }) => {

	const handleChange = event => {
		const { target: { value } } = event
		const formattedValue = value.replace(/(R\$|\.)/g, '').replace(',', '.')
		onChange({ target: { name, value: formattedValue } })
	}

	return <MoneyInputElement
		prefix="R$"
		{...otherProps}
		onChange={handleChange}
		thousandSeparator="."
		decimalSeparator=","
		decimalScale={2}
		fixedDecimalScale={true}
		aria-label={placeholder}
		placeholder={placeholder}
	/>
}

export default MoneyInput