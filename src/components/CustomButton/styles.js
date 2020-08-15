import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'
import { Colors, Shadows } from '../../assets/styles/variables'

const getBackgroundColor = background => {
	switch (background) {
		case 'orange':
			return Colors.ORANGE
		case 'facebook':
			return Colors.FACEBOOK
		case 'google':
			return Colors.GOOGLE
		default:
			return Colors.PURPLE
	}
}

const getStyles = ({ color, marginBottom = 0 }) => css`
	background: ${getBackgroundColor(color)};
	box-shadow: ${Shadows.SMALL};
	color: #FFFFFF;
	cursor: pointer;
	display: inline-block;
	border: 0;
	margin-bottom: ${marginBottom}px;
	padding: 10px 25px;
	text-align: center;
	transition: 350ms;
	&:hover {
		transform: skew(-10deg);
	}
`

export const CustomButtonElement = styled.button`${getStyles}`

export const CustomButtonElementAsLink = styled(Link)`${getStyles}`