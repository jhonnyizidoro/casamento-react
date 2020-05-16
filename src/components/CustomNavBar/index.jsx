import React from 'react'

import CustomContainer from '../CustomContainer'
import LogoImage from '../../assets/images/logos/logo.png'

import { NavBarContainer, NavBarLogoImage, NavBarLinks, NavBarLink } from './styles'

const CustomNavBar = () => (
	<CustomContainer>
		<NavBarContainer>
			<NavBarLogoImage src={LogoImage} />
			<NavBarLinks>
				<NavBarLink>NOSSA HISTÓRIA</NavBarLink>
				<NavBarLink>LISTA DE PRESENTES</NavBarLink>
				<NavBarLink>GALERIA</NavBarLink>
				<NavBarLink>CONFIRMA PRESENÇA</NavBarLink>
				<NavBarLink>SOBRE O CASAMENTO</NavBarLink>
			</NavBarLinks>
		</NavBarContainer>
	</CustomContainer>
)

export default CustomNavBar