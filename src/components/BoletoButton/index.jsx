import React from 'react'

import { BoletoButtonElement } from './styles'

const BoletoButton = ({ url }) => (
	<BoletoButtonElement
		href={url}
		target="_blank"
		rel="noopener"
	>
		Imprimir boleto
	</BoletoButtonElement>
)

export default BoletoButton