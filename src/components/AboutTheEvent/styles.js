import styled from 'styled-components'

import { Colors, Fonts, Shadows } from '../../assets/styles/variables'

export const AboutTheEventWrapper = styled.div`
	display: flex;
	margin-bottom: 80px;
`

export const AboutTheEventData = styled.div`
	width: 40%;
`

export const AboutTheEventTitle = styled.div`
	color: ${Colors.ORANGE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 4rem;
`

export const AboutTheEventSubtitle = styled.span`
	display: inline-block;
	margin: 20px 0 10px 5px;
	transform: translateY(-4px);
`

export const AboutTheEventText = styled.p`
	line-height: 1.8;
	margin: 0 0 20px;
`

export const AboutTheEventMap = styled.iframe`
	border: 0;
	box-shadow: ${Shadows.MEDIUM};
	width: 60%;
`