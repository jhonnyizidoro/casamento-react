import styled, { css } from 'styled-components'

import { Colors } from '../../assets/styles/variables'

const getFillColor = fill => {
	switch (fill) {
		case 'purple':
			return Colors.PURPLE
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

export const CustomIconContainer = styled.i`
	${getFill}
	${getSize}
	display: inline-block;
	width: 20px;
`