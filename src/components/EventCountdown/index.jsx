import React, { useState, useEffect } from 'react'

import CustomContainer from '../CustomContainer'

import {
	EventCountdownTitleWrapper,
	EventCountdownTitle,
	EventCountdownWrapper,
	EventCountdownBlock,
	EventCountdownNumber,
	EventCountdownText,
} from './styles'

const EventCountdown = () => {
	const date = new Date('2021-02-20T15:30:00-03:00').getTime()
	const [chronometer, setChronometer] = useState({})

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime()
			const distance = date - now
			setChronometer({
				days: Math.floor(distance / 86400000),
				hours: Math.floor((distance % 86400000) / 3600000),
				minutes: Math.floor((distance % 3600000) / 60000),
				seconds: Math.floor((distance % 60000) / 1000),
			})
		}, 1000)
		return () => clearInterval(interval)
	})

	return (
		<CustomContainer>
			<EventCountdownTitleWrapper>
				<EventCountdownTitle>ESTAMOS CONTANDO OS SEGUNDOS PARA ESSE MOMENTO TÃO ESPECIAL</EventCountdownTitle>
			</EventCountdownTitleWrapper>
			<EventCountdownWrapper>
				<EventCountdownBlock>
					<EventCountdownNumber>{chronometer.days >= 0 ? chronometer.days : 0}</EventCountdownNumber>
					<EventCountdownText>DIAS</EventCountdownText>
				</EventCountdownBlock>
				<EventCountdownBlock>
					<EventCountdownNumber>{chronometer.hours >= 0 ? chronometer.hours : 0}</EventCountdownNumber>
					<EventCountdownText>HORAS</EventCountdownText>
				</EventCountdownBlock>
				<EventCountdownBlock>
					<EventCountdownNumber>{chronometer.minutes >= 0 ? chronometer.minutes : 0}</EventCountdownNumber>
					<EventCountdownText>MINUTOS</EventCountdownText>
				</EventCountdownBlock>
				<EventCountdownBlock>
					<EventCountdownNumber>{chronometer.seconds >= 0 ? chronometer.seconds : 0}</EventCountdownNumber>
					<EventCountdownText>SEGUNDOS</EventCountdownText>
				</EventCountdownBlock>
			</EventCountdownWrapper>
		</CustomContainer>
	)
}

export default EventCountdown