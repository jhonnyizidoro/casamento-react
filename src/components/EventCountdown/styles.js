import styled from 'styled-components'

import { Fonts, Colors } from '../../assets/styles/variables'

export const EventCountdownTitleWrapper = styled.div`
	border-top: 1px solid ${Colors.LIGHT};
	margin-top: 80px;
	padding-top: 80px;
`

export const EventCountdownTitle = styled.div`
	
	font-family: ${Fonts.CONDENSED};
	font-size: 2.2rem;
	margin: 0 auto 50px;
	max-width: 550px; 
	text-align: center;
`

export const EventCountdownWrapper = styled.div`
	display: flex;
	margin-bottom: 100px;
`

export const EventCountdownBlock = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	text-align: center;
`

export const EventCountdownNumber = styled.div`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.CONDENSED};
	font-size: 7rem;
	line-height: .85;
`

export const EventCountdownText = styled.div`
	color: ${Colors.PURPLE};
	font-size: 1.2rem;
`