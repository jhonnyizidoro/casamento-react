import styled from 'styled-components'

import { Colors, Fonts } from '../../assets/styles/variables'

export const SignInButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 430px;
	margin: 0 auto;
	text-align: center;
`

export const SignInButtonsTitle = styled.h1`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 5rem;
	font-weight: normal;
`

export const SignInButtonsSubtitle = styled.div`
	color: ${Colors.PURPLE};
	margin-bottom: 15px;
`