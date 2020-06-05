import React from 'react'

import CustomIcon from '../CustomIcon'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'

import {
	CustomFooterElement,
	CustomFooterText,
	CustomFooterDeveloper,
	CustomFooterLink,
} from './styles'

const CustomFooter = () => (
	<CustomFooterElement>
		<CustomFooterText>Jenyfer e Leonardo - Todos os direitos reservados © | ${new Date().getFullYear()} - Todo o sempre</CustomFooterText>
		<CustomFooterDeveloper>
			<CustomFooterText>Desenvolvido por</CustomFooterText>
			<CustomFooterText>JHONNY IZIDORO MENARIM</CustomFooterText>
			<CustomIcon marginRight={7} fill="white">
				<CustomFooterLink href="https://www.facebook.com/jhonny.cfal/" target="_blank">
					<FacebookIcon />
				</CustomFooterLink>
			</CustomIcon>
			<CustomIcon marginRight={7} fill="white">
				<CustomFooterLink href="https://api.whatsapp.com/send?phone=5541991791053" target="_blank">
					<WhatsAppIcon />
				</CustomFooterLink>
			</CustomIcon>
			<CustomIcon marginRight={7} fill="white">
				<CustomFooterLink href="https://www.instagram.com/jhonny.menarim/" target="_blank">
					<InstagramIcon />
				</CustomFooterLink>
			</CustomIcon>
		</CustomFooterDeveloper>
	</CustomFooterElement>
)

export default CustomFooter