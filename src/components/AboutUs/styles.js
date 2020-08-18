import styled from 'styled-components'

import { Colors, Fonts, Shadows } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

export const AboutUsTitle = styled.h2`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.CONDENSED};
	font-size: 2.5rem;
	font-weight: normal;
	margin: 50px auto 20px;
	max-width: 450px;
	text-align: center;
	${onMobile`
		font-size: 2rem;
	`}
`

export const AboutUsContainer = styled.div`
	display: flex;
	${onMobile`
		display: block;
	`}
`

export const AboutUsSection = styled.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	flex-wrap: wrap;
	&:nth-child(2) {
		flex-direction: row-reverse;
	}
	${onMobile`
		flex-direction: column;
		&:nth-child(1) {
			margin-bottom: 30px;
		}
		&:nth-child(2) {
			flex-direction: column;
		}
	`}
`

export const AboutUsContent = styled.div`
	width: 50%;
	${onMobile`
		width: 100%;
	`}
`

export const AboutUsSubtitle = styled.h3`
	color: ${Colors.ORANGE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 5rem;
	font-weight: normal;
	${onMobile`
		font-size: 3rem;
		text-align: center;
	`}
`

export const AboutUsText = styled.p`
	padding: 0 10px;
	text-align: justify;
`

export const AboutUsImage = styled.img`
	filter: drop-shadow(${Shadows.SMALL});
	object-fit: cover;
	padding: 5px;
	width: 50%;
	${onMobile`
		padding: 0;
		width: 100%;
	`}
`

export const AboutUsContact = styled.div`
	border: 1px solid ${Colors.LIGHT};
	display: flex;
	margin: 10px 5px;
	padding: 15px 0;
	width: 100%;
	${onMobile`
		flex-direction: column;
		margin: 10px 0;
		padding: 10px 0;
	`}
`

export const AboutUsContactBlock = styled.div`
	color: ${Colors.PURPLE};
	display: flex;
	flex-grow: 1;
	font-size: .9rem;
	justify-content: center;
	${onMobile`
		padding: 10px 0;
	`}
`