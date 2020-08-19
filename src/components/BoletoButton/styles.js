import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'

export const BoletoButtonElement = styled.a`
	color: ${Colors.FACEBOOK};
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`