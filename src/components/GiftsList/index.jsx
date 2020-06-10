import React from 'react'
import { Link } from 'react-router-dom'

import CustomContainer from '../CustomContainer'
import CustomButton from '../CustomButton'
import CustomDivider from '../CustomDivider'

import { GiftsListHeader, GiftsListSection, GiftsListTitle, GiftsListText } from './styles'

const GiftsList = () => (
	<>
		<GiftsListHeader>Lista de Presentes</GiftsListHeader>
		<CustomContainer>
			<GiftsListSection>
				<GiftsListTitle>LISTA VIRTUAL</GiftsListTitle>
				<GiftsListText>Ajude-nos a montar o nosso novo lar diretamente por esse site! Aqui vocês poderão encontrar nossa lista de presentes. Obrigado pelos mimos!</GiftsListText>
				<Link to="/products">
					<CustomButton>VER LISTA VIRTUAL</CustomButton>
				</Link>
			</GiftsListSection>
			<GiftsListSection>
				<GiftsListTitle>LISTA EM LOJAS</GiftsListTitle>
				<GiftsListText>Ajude-nos a montar o nosso novo lar diretamente por esse site! Aqui vocês poderão encontrar nossa lista de presentes. Obrigado pelos mimos!</GiftsListText>
				<CustomButton>VER LISTA EM LOJAS</CustomButton>
			</GiftsListSection>
			<CustomDivider />
		</CustomContainer>
	</>
)

export default GiftsList