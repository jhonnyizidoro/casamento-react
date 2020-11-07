import React from 'react'

import CustomContainer from '../CustomContainer'
import CustomIcon from '../CustomIcon'
import CustomButton from '../CustomButton'
import { ReactComponent as LocationPinIcon } from '../../assets/icons/location-pin.svg'
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg'

import {
	AboutTheEventWrapper,
	AboutTheEventData,
	AboutTheEventTitle,
	AboutTheEventSubtitle,
	AboutTheEventText,
	AboutTheEventMap,
} from './styles'

const AboutTheEvent = () => (
	<CustomContainer>
		<AboutTheEventWrapper>
			<AboutTheEventData>
				<AboutTheEventTitle>Data e hora</AboutTheEventTitle>
				<CustomIcon>
					<LocationPinIcon />
				</CustomIcon>
				<AboutTheEventSubtitle>ENDEREÇO</AboutTheEventSubtitle>
				<AboutTheEventText>R. Marina Coelho, 330 - Borda do Campo, São José dos Pinhais - PR, 83075-297</AboutTheEventText>
				<CustomIcon>
					<ClockIcon />
				</CustomIcon>
				<AboutTheEventSubtitle>DATA E HORA</AboutTheEventSubtitle>
				<AboutTheEventText>20/02/2021, Das 17:00 até as 03:00</AboutTheEventText>
				<CustomButton onClick={() => window.open('https://goo.gl/maps/Lx1k6ZozippVn95V6')}>ABRIR NO MAPA</CustomButton>
			</AboutTheEventData>
			<AboutTheEventMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14401.407694106223!2d-49.0969495!3d-25.5266518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6855474e0ca42ead!2sEvent%20farm%20Querencia%20Gaucha!5e0!3m2!1sen!2sbr!4v1604778799393!5m2!1sen!2sbr" title="Mapa do evento" />
		</AboutTheEventWrapper>
		<AboutTheEventTitle>Sobre o evento</AboutTheEventTitle>
		<AboutTheEventText>A cerimônia terá início às 17h00, tente chegar um tempinho antes para aproveitar a beleza do lugar e o ambiente. O jantar será no mesmo local, crie expectativas para aproveitar muito! Preparamos a festa com muito carinho para que você celebre conosco, sua presença é muito especial para nós.</AboutTheEventText>
	</CustomContainer>
)

export default AboutTheEvent