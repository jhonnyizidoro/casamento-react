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
				<AboutTheEventText>Rua Adão Sobocinski, 161, Apartamento 601 - Curitiba/PR</AboutTheEventText>
				<CustomIcon>
					<ClockIcon />
				</CustomIcon>
				<AboutTheEventSubtitle>DATA E HORA</AboutTheEventSubtitle>
				<AboutTheEventText>01/01/2000, De 20:00 até 02:00</AboutTheEventText>
				<CustomButton onClick={() => window.open('https://www.google.com/maps/place/R.+Ad%C3%A3o+Sobocinski,+161+-+Cristo+Rei,+Curitiba+-+PR,+80050-480/@-25.4348453,-49.2397789,17z/data=!3m1!4b1!4m5!3m4!1s0x94dce5a944e830bd:0xea18f29d6ec1ce05!8m2!3d-25.4348453!4d-49.2375902')}>ABRIR NO MAPA</CustomButton>
			</AboutTheEventData>
			<AboutTheEventMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1022372237817!2d-49.23977888498579!3d-25.43484528378617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5a944e830bd%3A0xea18f29d6ec1ce05!2sR.%20Ad%C3%A3o%20Sobocinski%2C%20161%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2080050-480!5e0!3m2!1sen!2sbr!4v1591336868905!5m2!1sen!2sbr" title="Mapa do evento" />
		</AboutTheEventWrapper>
		<AboutTheEventTitle>Sobre o evento</AboutTheEventTitle>
		<AboutTheEventText>Praesent ac sem eget est egestas volutpat. Sed in libero ut nibh placerat accumsan. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Nam eget dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.Praesent ac sem eget est egestas volutpat. Sed in libero ut nibh placerat accumsan. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Nam eget dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui</AboutTheEventText>
	</CustomContainer>
)

export default AboutTheEvent