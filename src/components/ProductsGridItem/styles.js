import styled from 'styled-components'

import { Colors, Shadows } from '../../assets/styles/variables'

export const ProductsGridItemElement = styled.div`
	box-shadow: ${Shadows.SMALL};
	padding-bottom: 15px;
	text-align: center;
	transition: 350ms;
	&:hover {
		transform: translate(-2px, -2px);
	}
`

export const ProductsGridItemFigure = styled.figure`
	padding-top: 75%;
	position: relative;
`

export const ProductsGridItemImage = styled.img`
	height: 100%;
	object-fit: cover;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`

export const ProductsGridItemName = styled.div`
	color: ${Colors.DARK};
	margin-top: 10px;
	text-transform: uppercase;
`

export const ProductsGridItemCategory = styled.div`
	color: ${Colors.MUTED};
	font-size: .9rem;
`

export const ProductsGridItemValue = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	margin: 10px 0;
`