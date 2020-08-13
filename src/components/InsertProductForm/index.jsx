import React, { useState } from 'react'
import { connect } from 'react-redux'

import { insertProductStart } from '../../redux/product/product.actions'

import CustomForm from '../../components/CustomForm'
import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'
import FormSelect from '../../components/FormSelect'
import ImageInput from '../ImageInput'

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
			/>
			<FormInput
				name="name"
				placeholder="Nome"
				onChange={handleChange}
				required
			/>
			<FormInput
				name="value"
				placeholder="Valor"
				onChange={handleChange}
				type="number"
				required
			/>
			<FormSelect
				name="category"
				placeholder="Selecione a categoria"
				onChange={handleChange}
				required
				items={[
					{ label: 'Cozinha', value: 'Cozinha' },
					{ label: 'Quarto', value: 'Quarto' },
					{ label: 'Churrasco', value: 'Churrasco' },
				]}
			/>
			<CustomButton type="submit" color="orange">CADASTRAR PRODUTO</CustomButton>
		</CustomForm>
	)
}

const mapDispatchToProps = dispatch => ({
	insertProductStart: product => dispatch(insertProductStart(product)),
})

export default connect(null, mapDispatchToProps)(InsertProductForm)