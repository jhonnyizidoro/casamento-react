import React from 'react'

import CustomButton from '../CustomButton'

import {
	ProductsGridItemElement,
	ProductsGridItemFigure,
	ProductsGridItemImage,
	ProductsGridItemName,
	ProductsGridItemCategory,
	ProductsGridItemValue,
} from './styles'

const ProductsGridItem = ({ name, image, category, value }) => (
	<ProductsGridItemElement>
		<ProductsGridItemFigure>
			<ProductsGridItemImage src={image} />
		</ProductsGridItemFigure>
		<ProductsGridItemName>{name}</ProductsGridItemName>
		<ProductsGridItemCategory>{category}</ProductsGridItemCategory>
		<ProductsGridItemValue>R${value}</ProductsGridItemValue>
		<CustomButton type="button" color="orange">
			COMPRAR
		</CustomButton>
	</ProductsGridItemElement>
)

export default ProductsGridItem