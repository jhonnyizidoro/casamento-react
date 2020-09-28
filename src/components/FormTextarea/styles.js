import styled from 'styled-components'

import { Colors, Fonts } from '../../assets/styles/variables'

export const FormTextareaElement = styled.textarea`
	border: 1px solid ${Colors.LIGHT};
	font-family: ${Fonts.CONDENSED};
	font-size: 1.2rem;
	height: 6em;
	margin-bottom: 10px;
	padding: 10px;
`