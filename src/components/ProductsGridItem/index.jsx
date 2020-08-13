import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../CustomButton'

import {
	ProductsGridItemElement,
	ProductsGridItemFigure,
	ProductsGridItemImage,
	ProductsGridItemName,
	ProductsGridItemCategory,
	ProductsGridItemValue,
} from './styles'

const ProductsGridItem = ({ name, image, category, value, id }) => (
	<ProductsGridItemElement>
		<ProductsGridItemFigure>
			<ProductsGridItemImage src={image}/>
		</ProductsGridItemFigure>
		<ProductsGridItemName>{name}</ProductsGridItemName>
		<ProductsGridItemCategory>{category}</ProductsGridItemCategory>
		<ProductsGridItemValue>R${value}</ProductsGridItemValue>
		<Link to={`/payment/${id}`}>
			<CustomButton color="orange">
				COMPRAR
			</CustomButton>
		</Link>
	</ProductsGridItemElement>
)

export default ProductsGridItem