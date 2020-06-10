import React, { useState } from 'react'

import CustomForm from '../../components/CustomForm'
import FormInput from '../../components/FormInput'
import CustomButton from '../../components/CustomButton'
import FormSelect from '../../components/FormSelect'
import ImageInput from '../ImageInput'

const InsertProductForm = () => {
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
		console.log(product)
	}

	return (
		<CustomForm onSubmit={handleSubmit} title="Insira um produto">
			<ImageInput
				name="image"
				onChange={handleChange}
			/>
			<FormInput
				name="name"
				placeholder="Nome"
				onChange={handleChange}
			/>
			<FormInput
				name="value"
				placeholder="Valor"
				onChange={handleChange}
			/>
			<FormSelect
				name="category"
				placeholder="Selecione a categoria"
				onChange={handleChange}
				items={[
					'Cozinha',
					'Quarto',
					'Churrasco',
				]}
			/>
			<CustomButton type="submit" color="orange">CADASTRAR PRODUTO</CustomButton>
		</CustomForm>
	)
}

export default InsertProductForm