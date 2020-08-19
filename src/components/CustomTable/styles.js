import styled from 'styled-components'

import { Colors, Fonts, Shadows } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

export const CustomTableTitle = styled.h1`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 4rem;
	font-weight: normal;
	margin-top: 40px;
	text-align: center;
	${onMobile`
		font-size: 3rem;
	`}
`

export const CustomTableContainer = styled.div`
	box-shadow: ${Shadows.SMALL};
	margin-bottom: 40px;
`

export const CustomTableRow = styled.div`
	display: flex;
	&:nth-child(1) {
		font-weight: bold;
	}
	&:nth-child(odd) {
		background: ${Colors.LIGHTER};
	}
	${onMobile`
		border-bottom: 1px solid ${Colors.MUTED};
		flex-direction: column;
		&:nth-child(1) {
			display: none;
		}
	`}
`

export const CustomTableColumn = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	padding: 10px 5px;
`

export const CustomTableMobileLabel = styled.strong`
	display: none;
	${onMobile`
		display: inline;
	`}
`