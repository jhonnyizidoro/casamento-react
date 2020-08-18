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

const ProductsGridItem = ({ name, image, category, value, id }) => (
	<ProductsGridItemElement>
		<ProductsGridItemFigure>
			<ProductsGridItemImage src={image} alt={`Imagem do produto ${name}`} />
		</ProductsGridItemFigure>
		<ProductsGridItemName>{name}</ProductsGridItemName>
		<ProductsGridItemCategory>{category}</ProductsGridItemCategory>
		<ProductsGridItemValue>R${Number(value).toFixed(2)}</ProductsGridItemValue>
		<CustomButton to={`/payment/${id}`} color="orange">COMPRAR</CustomButton>
	</ProductsGridItemElement>
)

export default ProductsGridItem