import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format'

import { Colors, Fonts } from '../../assets/styles/variables'

export const MoneyInputElement = styled(CurrencyFormat)`
	border: 1px solid ${Colors.LIGHT};
	font-family: ${Fonts.CONDENSED};
	font-size: 1.2rem;
	margin-bottom: 10px;
	padding: 10px;
`