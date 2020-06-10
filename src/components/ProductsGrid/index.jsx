import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectProducts } from '../../redux/product/product.selectors'
import { fetchProductsStart } from '../../redux/product/product.actions'

import CustomContainer from '../CustomContainer'
import CustomButton from '../CustomButton'

import {
	ProductsGridContainer,
	ProductsGridItem,
	ProductsGridFigure,
	ProductsGridImage,
	ProductsGridName,
	ProductsGridCategory,
	ProductsGridValue,
} from './styles'

const ProductsGrid = ({ products, fetchProductsStart }) => {
	useEffect(() => {
		fetchProductsStart()
	}, [fetchProductsStart])

	return (<CustomContainer>
		<ProductsGridContainer>
			{
				products && products.map(({ id, name, image, category, value }) => (
					<ProductsGridItem key={id}>
						<ProductsGridFigure>
							<ProductsGridImage src={image} />
						</ProductsGridFigure>
						<ProductsGridName>{name}</ProductsGridName>
						<ProductsGridCategory>{category}</ProductsGridCategory>
						<ProductsGridValue>{value}</ProductsGridValue>
						<CustomButton type="button" color="orange">COMPRAR</CustomButton>
					</ProductsGridItem>
				))
			}
		</ProductsGridContainer>
	</CustomContainer>)

}

const mapStateToProps = createStructuredSelector({
	products: selectProducts,
})

const mapDispatchToProps = dispatch => ({
	fetchProductsStart: () => dispatch(fetchProductsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid)