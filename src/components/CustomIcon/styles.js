import styled, { css } from 'styled-components'

import { Colors } from '../../assets/styles/variables'

const getFillColor = fill => {
	switch (fill) {
		case 'purple':
			return Colors.PURPLE
		case 'pink':
			return Colors.PINK
		case 'white':
			return '#FFFFFF'
		default:
			return Colors.DARK
	}
}

const getSize = ({ size = 20 }) => css`
	height: ${size}px;
	width: ${size}px;
`

const getFill = ({ fill }) => css`
	path {
		fill: ${getFillColor(fill)};
	}
`

const getMarginRight = ({ marginRight = 0 }) => css`
	margin-right: ${marginRight}px;
`

export const CustomIconContainer = styled.i`
	${getFill}
	${getSize}
	${getMarginRight}
	display: inline-block;
`