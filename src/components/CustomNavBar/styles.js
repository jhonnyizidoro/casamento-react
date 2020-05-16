import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'

export const NavBarContainer = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
`

export const NavBarLogoImage = styled.img`
	height: 65px
`

export const NavBarLinks = styled.div``

export const NavBarLink = styled.span`
	border-bottom: 2px solid transparent;
	cursor: pointer;
	font-size: .85rem;
	padding: 10px;
	transition: 200ms;
	&:hover {
		border-bottom-color: ${Colors.ORANGE};
	}
`