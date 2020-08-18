import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectProducts } from '../../redux/product/product.selectors'
import { fetchProductsStart } from '../../redux/product/product.actions'

import CustomContainer from '../CustomContainer'
import ProductsGridItem from '../ProductsGridItem'
import AppLoader from '../AppLoader'

import { ProductsGridContainer, ProductsGridTitle } from './styles'

const ProductsGrid = ({ products, fetchProductsStart }) => {
	useEffect(() => {
		fetchProductsStart()
	}, [fetchProductsStart])

	return products ?
		(
			<CustomContainer>
				<ProductsGridTitle>Produtos disponíveis</ProductsGridTitle>
				<ProductsGridContainer>
					{
						products && products.map(product => <ProductsGridItem key={product.id} {...product} />)
					}
				</ProductsGridContainer>
			</CustomContainer>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	products: selectProducts,
})

const mapDispatchToProps = dispatch => ({
	fetchProductsStart: () => dispatch(fetchProductsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid)