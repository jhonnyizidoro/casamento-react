import styled from 'styled-components'

import { Colors, Fonts, Shadows } from '../../assets/styles/variables'

export const CustomTableTitle = styled.h1`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 4rem;
	font-weight: normal;
	text-align: center;
`

export const CustomTableContainer = styled.div`
	box-shadow: ${Shadows.SMALL};
`

export const CustomTableRow = styled.div`
	display: flex;
	padding: 10px 0;
	&:nth-child(1) {
		font-weight: bold;
	}
	&:nth-child(odd) {
		background: ${Colors.LIGHTER};
	}
`

export const CustomTableColumn = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	padding: 0 5px;
`