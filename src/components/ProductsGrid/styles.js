import styled from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

export const ProductsGridContainer = styled.div`
	display: grid;
	grid-gap: 30px 15px;
	grid-template-columns: repeat(4, 1fr);
	margin: 20px 0 80px;
`

export const ProductsGridTitle = styled.h1`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 4rem;
	font-weight: normal;
	text-align: center;
`