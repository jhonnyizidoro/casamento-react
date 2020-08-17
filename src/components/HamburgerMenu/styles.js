import styled, { css } from 'styled-components'

import { Colors } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

const activeHamburgerMenuStyles = css`
	div {
		background: transparent;
	}
	div::after {
		top: 0;
		transform: rotate(45deg);
	}
	div::before {
		bottom: 0;
		transform: rotate(-45deg);
	}
`

const getHamburgerMenuStyles = ({ isActive }) => isActive ? activeHamburgerMenuStyles : null

export const HamburgerMenuWrapper = styled.div`
	cursor: pointer;
	display: none;
	height: 25px;
	padding-left: 50px;
	position: relative;
	&::after {
		content: 'MENU';
		left: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	${onMobile`
		display: block;
	`}
	${getHamburgerMenuStyles}
`

export const HamburgerMenuBlock = styled.div`
	background: ${Colors.DARK};
	height: 3px;
	transform: translateY(10px);
	width: 30px;
	&::after,
	&::before {
		background: ${Colors.DARK};
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		right: 0;
		transition: 150ms;
		width: 30px;
	}
	&::after {
		top: 10px;
	}
	&::before {
		bottom: 10px;
	}
`
