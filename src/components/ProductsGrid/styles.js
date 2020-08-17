import styled from 'styled-components'

import { Colors, Fonts } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

export const ProductsGridContainer = styled.div`
	display: grid;
	grid-gap: 30px 15px;
	grid-template-columns: repeat(4, 1fr);
	margin: 20px 0 80px;
	${onMobile`
		grid-template-columns: 1fr;
	`}
`

export const ProductsGridTitle = styled.h1`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.LIGHT_CURSIVE};
	font-size: 4rem;
	font-weight: normal;
	margin-top: 40px;
	text-align: center;
	${onMobile`
		font-size: 3rem;
	`}
`