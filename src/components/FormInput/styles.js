import styled from 'styled-components'
import InputMask from 'react-input-mask'

import { Colors, Fonts } from '../../assets/styles/variables'

export const FormInputElement = styled(InputMask)`
	border: 1px solid ${Colors.LIGHT};
	font-family: ${Fonts.CONDENSED};
	font-size: 1.2rem;
	margin-bottom: 10px;
	padding: 10px;
`