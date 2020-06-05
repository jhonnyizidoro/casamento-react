import styled from 'styled-components'

import { Colors, Fonts } from '../../assets/styles/variables'

export const CustomFormTitle = styled.div`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 3rem;
	margin: 40px 0 15px;
	text-align: center;
`

export const CustomFormElement = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 auto 40px;
	max-width: 400px;
`