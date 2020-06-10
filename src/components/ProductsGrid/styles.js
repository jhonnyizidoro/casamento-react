import styled from 'styled-components'

import { Colors, Shadows } from '../../assets/styles/variables'

export const ProductsGridContainer = styled.div`
	display: grid;
	grid-gap: 30px 15px;
	grid-template-columns: repeat(4, 1fr);
	margin: 30px 0 80px;
`

export const ProductsGridItem = styled.div`
	box-shadow: ${Shadows.SMALL};
	padding-bottom: 15px;
	text-align: center;
	transition: 350ms;
	&:hover {
		transform: translate(-2px, -2px);
	}
`

export const ProductsGridFigure = styled.figure`
	padding-top: 75%;
	position: relative;
`

export const ProductsGridImage = styled.img`
	height: 100%;
	object-fit: cover;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`

export const ProductsGridName = styled.div`
	color: ${Colors.PURPLE};
	margin-top: 10px;
	text-transform: uppercase;
`

export const ProductsGridCategory = styled.div`
	color: ${Colors.MUTED};
	font-size: .9rem;
`

export const ProductsGridValue = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	margin: 10px 0;
`