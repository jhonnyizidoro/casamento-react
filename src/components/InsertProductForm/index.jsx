import React, { useState } from 'react'
import { connect } from 'react-redux'

import { insertProductStart } from '../../redux/product/product.actions'
import categories from '../../utils/categories.data'

import CustomForm from '../../components/CustomForm'
import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'
import FormSelect from '../../components/FormSelect'
import ImageInput from '../ImageInput'
import MoneyInput from '../MoneyInput'

const InsertProductForm = ({ insertProductStart }) => {
	const [product, setProduct] = useState({})

	const handleChange = ({ target }) => {
		const { name, value } = target
		setProduct({
			...product,
			[name]: value,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
		insertProductStart(product)
	}

	return (
		<CustomForm onSubmit={handleSubmit} title="Insira um produto">
			<ImageInput
				name="image"
				onChange={handleChange}
				required
				aria-label="Selecione a imagem"
			/>
			<FormInput
				name="name"
				placeholder="Nome"
				onChange={handleChange}
				required
			/>
			<MoneyInput
				name="value"
				placeholder="Valor"
				onChange={handleChange}
				required
			/>
			<FormSelect
				aria-label="Selecione a categoria"
				name="category"
				placeholder="Selecione a categoria"
				onChange={handleChange}
				required
				items={categories}
			/>
			<CustomButton type="submit" color="orange">CADASTRAR PRODUTO</CustomButton>
		</CustomForm>
	)
}

const mapDispatchToProps = dispatch => ({
	insertProductStart: product => dispatch(insertProductStart(product)),
})

export default connect(null, mapDispatchToProps)(InsertProductForm)