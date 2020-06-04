import React from 'react'

import CustomIcon from '../CustomIcon'
import CustomContainer from '../CustomContainer'
import CustomDivider from '../CustomDivider'

import LeonardoImage from '../../assets/images/about/leonardo.jpg'
import JenyferImage from '../../assets/images/about/jenyfer.jpg'
import JenyferAndLeonardoImage from '../../assets/images/about/jenyfer-and-leonardo.jpg'
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'

import {
	AboutUsTitle,
	AboutUsContainer,
	AboutUsSection,
	AboutUsContent,
	AboutUsSubtitle,
	AboutUsText,
	AboutUsImage,
	AboutUsContact,
	AboutUsContactBlock,
} from './styles'

const AboutUs = () => (
	<CustomContainer>
		<AboutUsTitle>CONHEÇA UM POUCO DO CASAL MAIS FELIZ DO MUNDO</AboutUsTitle>
		<AboutUsContainer>
			<AboutUsSection>
				<AboutUsContent>
					<AboutUsSubtitle>Leonardo</AboutUsSubtitle>
					<AboutUsText>Aliquam erat volutpat. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh. amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh.</AboutUsText>
				</AboutUsContent>
				<AboutUsImage src={LeonardoImage} alt="Leonardo" />
				<AboutUsContact>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<CalendarIcon />
						</CustomIcon>
						01/01/1997
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<FacebookIcon />
						</CustomIcon>
						fb.com/leonardooleo
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<WhatsAppIcon />
						</CustomIcon>
						(41) 99999-9999
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<InstagramIcon />
						</CustomIcon>
						@leonardooleo
					</AboutUsContactBlock>
				</AboutUsContact>
			</AboutUsSection>
			<AboutUsSection>
				<AboutUsContent>
					<AboutUsSubtitle>Jenyfer</AboutUsSubtitle>
					<AboutUsText>Aliquam erat volutpat. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh. amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh.</AboutUsText>
				</AboutUsContent>
				<AboutUsImage src={JenyferImage} alt="Jenyfer" />
				<AboutUsContact>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<CalendarIcon />
						</CustomIcon>
						01/01/1997
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<FacebookIcon />
						</CustomIcon>
						fb.com/leonardooleo
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<WhatsAppIcon />
						</CustomIcon>
						(41) 99999-9999
					</AboutUsContactBlock>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<InstagramIcon />
						</CustomIcon>
						@leonardooleo
					</AboutUsContactBlock>
				</AboutUsContact>
			</AboutUsSection>
		</AboutUsContainer>
		<CustomDivider />
		<AboutUsSection>
			<AboutUsContent>
				<AboutUsSubtitle>Jenyfer e Leonardo</AboutUsSubtitle>
				<AboutUsText>Aliquam erat volutpat. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh. amet adipiscing sem neque sed ipsum. Aenean ut eros et nisl sagittis vestibulum. Sed fringilla mauris sit amet nibh.</AboutUsText>
			</AboutUsContent>
			<AboutUsImage src={JenyferAndLeonardoImage} alt="Jenyfer e Leonardo" />
		</AboutUsSection>
	</CustomContainer>
)

export default AboutUs