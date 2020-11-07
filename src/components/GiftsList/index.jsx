import React from 'react'

import CustomContainer from '../CustomContainer'
import CustomButton from '../CustomButton'

import {
	GiftsListHeader,
	GiftsListSection,
	GiftsListTitle,
	GiftsListText,
} from './styles'

const GiftsList = () => (
	<>
		<GiftsListHeader>Lista de Presentes</GiftsListHeader>
		<CustomContainer>
			<GiftsListSection>
				<GiftsListTitle>LISTA VIRTUAL</GiftsListTitle>
				<GiftsListText>Ajude-nos a montar o nosso novo lar diretamente por esse site! Aqui vocês poderão encontrar nossa lista de presentes. Obrigado pelos mimos!</GiftsListText>
				<CustomButton to="/products">VER LISTA VIRTUAL</CustomButton>
			</GiftsListSection>
		</CustomContainer>
	</>
)

export default GiftsList