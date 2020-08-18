import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectSingleProduct } from '../../redux/product/product.selectors'
import { fetchProductStart } from '../../redux/product/product.actions'
import { createOrderStart } from '../../redux/order/order.actions'
import { hash } from '../../utils/pagarme'

import CustomContainer from '../CustomContainer'
import CustomForm from '../CustomForm'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import InlineInputGroup from '../InlineInputGroup'
import FormSelect from '../FormSelect'
import CustomFormSubtitle from '../CustomFormSubtitle'

const PaymentForm = ({ product, fetchProductStart, currentUser, createOrderStart }) => {
	const [payment, setPayment] = useState({})
	const [card, setCard] = useState({})
	const { id } = useParams()

	useEffect(() => {
		fetchProductStart(id)
	}, [id, fetchProductStart])

	const handlePaymentChange = ({ target }) => {
		const { name, value } = target
		setPayment({
			...payment,
			[name]: value,
		})
	}

	const handleCardChange = ({ target }) => {
		const { name, value } = target
		setCard({
			...card,
			[name]: value,
		})
	}

	const handleSubmit = async event => {
		event.preventDefault()
		const cardHash = await hash(card)
		createOrderStart({ cardHash, payment, currentUser, product })
	}

	return product && (
		<CustomContainer>
			<CustomForm onSubmit={handleSubmit} title="Realizar pagamento">
				<CustomFormSubtitle>Dados do pagamento</CustomFormSubtitle>
				<FormSelect
					aria-label="Selecione a forma de pagamento"
					name="installments"
					onChange={handlePaymentChange}
					required
					items={[
						{ label: `1x de R$${product.value} sem juros`, value: 1 },
						{ label: `2x de R$${(product.value / 2).toFixed(2)} sem juros`, value: 2 },
						{ label: `3x de R$${(product.value / 3).toFixed(2)} sem juros`, value: 3 },
						{ label: `4x de R$${(product.value / 4).toFixed(2)} sem juros`, value: 4 },
						{ label: `5x de R$${(product.value / 5).toFixed(2)} sem juros`, value: 5 },
						{ label: `6x de R$${(product.value / 6).toFixed(2)} sem juros`, value: 6 },
					]}
				/>
				<FormInput
					required
					autoComplete="cc-number"
					name="cardNumber"
					placeholder="Número do cartão"
					onChange={handleCardChange}
					mask="9999 9999 9999 9999"
				/>
				<FormInput
					required
					autoComplete="cc-name"
					name="holderName"
					placeholder="Nome impresso no cartão"
					onChange={handleCardChange}
				/>
				<InlineInputGroup>
					<FormInput
						required
						autoComplete="cc-exp"
						name="expirationDate"
						placeholder="Data de expiração"
						onChange={handleCardChange}
						mask="99/99"
					/>
					<FormInput
						required
						autoComplete="cc-csc"
						name="cardCvv"
						placeholder="Código de segurança"
						onChange={handleCardChange}
						mask="999"
					/>
				</InlineInputGroup>
				<InlineInputGroup>
					<FormInput
						required
						name="phone"
						placeholder="Celular de contato"
						mask="(99) 99999-9999"
						onChange={handlePaymentChange}
					/>
					<FormInput
						required
						name="cpf"
						placeholder="CPF"
						mask="999.999.999-99"
						onChange={handlePaymentChange}
					/>
				</InlineInputGroup>
				<CustomFormSubtitle>Dados do endereço</CustomFormSubtitle>
				<InlineInputGroup>
					<FormInput
						name="zipcode"
						placeholder="CEP"
						onChange={handlePaymentChange}
						mask="99999-999"
						autoComplete="postal-code"
					/>
					<FormInput
						required
						name="state"
						placeholder="Estado"
						onChange={handlePaymentChange}
						mask="aa"
					/>
				</InlineInputGroup>
				<InlineInputGroup>
					<FormInput
						required
						name="city"
						placeholder="Cidade"
						onChange={handlePaymentChange}
					/>
					<FormInput
						required
						name="number"
						placeholder="Número"
						onChange={handlePaymentChange}
					/>
				</InlineInputGroup>
				<FormInput
					required
					name="street"
					placeholder="Rua"
					onChange={handlePaymentChange}
				/>
				<CustomButton type="submit" color="orange">REALIZAR PAGAMENTO</CustomButton>
			</CustomForm>
		</CustomContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	product: selectSingleProduct,
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	fetchProductStart: id => dispatch(fetchProductStart(id)),
	createOrderStart: order => dispatch(createOrderStart(order)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)