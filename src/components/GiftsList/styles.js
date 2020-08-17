import styled from 'styled-components'

import { Colors, Fonts, Shadows } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

import GiftsListBackground from '../../assets/images/gifts/background.jpg'

export const GiftsListHeader = styled.div`
	background: url(${GiftsListBackground});
	box-shadow: ${Shadows.MEDIUM};
	color: #FFFFFF;
	font-family: ${Fonts.STRONG_CURSIVE};
	font-size: 4.5rem;
	font-weight: normal;
	margin-top: 100px;
	padding: 150px 0;
	text-align: center;
	text-shadow: ${Shadows.SMALL};
	${onMobile`
		font-size: 3rem;
		padding: 70px 0;
	`}
`

export const GiftsListSection = styled.section`
	color: ${Colors.DARK};
	text-align: center;
	padding: 80px 0;
	&:nth-child(1) {
		border-bottom: 1px solid ${Colors.LIGHT};
	}
`

export const GiftsListTitle = styled.h2`
	font-family: ${Fonts.CONDENSED};
	font-size: 2.2rem;
	font-weight: normal;
`

export const GiftsListText = styled.p`
	margin: 15px auto;
	max-width: 700px;
`