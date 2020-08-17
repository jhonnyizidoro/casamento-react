import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Colors, Shadows } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

const getNavBarTransform = ({ isActive }) => isActive ? 'none' : 'translateX(100%)'

export const NavBarContainer = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
	${onMobile`
		background: white;
		box-shadow: ${Shadows.SMALL};
		left: 0;
		padding: 10px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;
	`}
`

export const NavBarLogoImage = styled.img`
	height: 65px;
	${onMobile`
		height: 45px;
	`}
`

export const NavBarLinks = styled.div`
	${onMobile`
		background: white;
		height: calc(100vh - 65px);
		left: 0;
		position: fixed;
		top: 65px;
		transform: ${getNavBarTransform};
		transition: 400ms;
		width: 100%;
		z-index: 1;
	`}
`

const navBarItemStyles = () => css`
	border-bottom: 2px solid transparent;
	cursor: pointer;
	font-size: .85rem;
	padding: 10px;
	transition: 200ms;
	&:hover,
	&.active {
		border-bottom-color: ${Colors.ORANGE};
	}
	${onMobile`
		display: block;
		font-size: 1.1rem;
		padding: 15px;
		&:hover,
		&.active {
			border: 0;
		}
	`}
`

export const NavBarItemAsLink = styled(NavLink)`${navBarItemStyles}`
export const NavBarItemAsText = styled.span`${navBarItemStyles}`