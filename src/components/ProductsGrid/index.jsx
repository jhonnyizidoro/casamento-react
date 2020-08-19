import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectProducts } from '../../redux/product/product.selectors'
import { fetchProductsStart } from '../../redux/product/product.actions'
import categories from '../../utils/categories'

import CustomContainer from '../CustomContainer'
import ProductsGridItem from '../ProductsGridItem'
import AppLoader from '../AppLoader'
import InlineInputGroup from '../InlineInputGroup'
import FormSelect from '../FormSelect'

import { ProductsGridContainer, ProductsGridTitle, ProductsGridHeader } from './styles'

const ProductsGrid = ({ products, fetchProductsStart }) => {
	const [order, setOrder] = useState(false)
	const [category, setCategory] = useState(false)

	useEffect(() => {
		fetchProductsStart()
	}, [fetchProductsStart])

	const handleFilters = () => {
		let filtered
		switch (order) {
			case '0':
				filtered = products.sort((a, b) => Number(a.value) > Number(b.value) ? -1 : 1)
				break
			case '1':
				filtered = products.sort((a, b) => Number(b.value) > Number(a.value) ? -1 : 1)
				break
			case '2':
				filtered = products.sort((a, b) => a.name.localeCompare(b.name))
				break
			case '3':
				filtered = products.sort((a, b) => b.name.localeCompare(a.name))
				break
			default:
				filtered = products
		}

		if (category) {
			filtered = filtered.filter(product => product.category === category)
		}

		return filtered
	}

	return products ?
		(
			<CustomContainer>
				<ProductsGridHeader>
					<ProductsGridTitle>Produtos disponíveis</ProductsGridTitle>
					<InlineInputGroup>
						<FormSelect
							aria-label="Filtrar por categoria"
							placeholder="Todas as categorias"
							onChange={({ target: { value } }) => setCategory(value)}
							items={categories}
						/>
						<FormSelect
							aria-label="Selecione a ordenação"
							placeholder="Ordenar por"
							onChange={({ target: { value } }) => setOrder(value)}
							items={[
								{ label: 'Maior preço', value: '0' },
								{ label: 'Menor preço', value: '1' },
								{ label: 'Nome A-Z', value: '2' },
								{ label: 'Nome Z-A', value: '3' },
							]}
						/>
					</InlineInputGroup>
				</ProductsGridHeader>
				<ProductsGridContainer>
					{
						handleFilters().map(product => <ProductsGridItem key={product.id} {...product} />)
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