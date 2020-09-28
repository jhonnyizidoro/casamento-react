import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectSingleProduct } from '../../redux/product/product.selectors'
import { selectStates, selectCities } from '../../redux/order/order.selectors'
import { selectSubmitting } from '../../redux/app/app.selectors'
import { fetchProductStart } from '../../redux/product/product.actions'
import { fetchStatesStart, fetchCitiesStart } from '../../redux/order/order.actions'
import { createOrderStart } from '../../redux/order/order.actions'
import { setSubmitting } from '../../redux/app/app.actions'
import { hash } from '../../utils/pagarme'

import CustomContainer from '../CustomContainer'
import CustomForm from '../CustomForm'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import InlineInputGroup from '../InlineInputGroup'
import FormSelect from '../FormSelect'
import FormTextarea from '../FormTextarea'
import CustomFormSubtitle from '../CustomFormSubtitle'
import AppLoader from '../AppLoader'

const PaymentForm = ({ product, fetchProductStart, currentUser, createOrderStart, states, cities, fetchStatesStart, fetchCitiesStart, submitting, setSubmitting }) => {
	const [payment, setPayment] = useState({})
	const [card, setCard] = useState({})
	const { id } = useParams()

	useEffect(() => {
		fetchProductStart(id)
		fetchStatesStart()
	}, [id, fetchProductStart, fetchStatesStart])

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

	const handleStateChange = event => {
		handlePaymentChange(event)
		const { target: { value } } = event
		fetchCitiesStart(value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		setSubmitting(true)
		const cardHash = payment.method === 'boleto' ? null : await hash(card)
		createOrderStart({ cardHash, payment, currentUser, product })
	}

	return product && states ?
		(
			<CustomContainer>
				<CustomForm onSubmit={handleSubmit} title="Realizar pagamento">
					<CustomFormSubtitle>Dados do pagamento</CustomFormSubtitle>
					<FormSelect
						aria-label="Selecione a forma de pagamento"
						name="method"
						onChange={handlePaymentChange}
						required
						items={[
							{ label: 'Pagamento com Cartão de Crédito', value: 'card' },
							{ label: 'Pagamento com Boleto', value: 'boleto' },
						]}
					/>
					{
						payment.method !== 'boleto' && (
							<>
								<FormSelect
									aria-label="Selecione as parcelas"
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
							</>
						)
					}
					<CustomFormSubtitle>Dados pessoais</CustomFormSubtitle>
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
					<InlineInputGroup>
						<FormInput
							name="zipcode"
							placeholder="CEP"
							onChange={handlePaymentChange}
							mask="99999-999"
							autoComplete="postal-code"
							required
						/>
						<FormSelect
							aria-label="Selecione seu estado"
							placeholder="Estado"
							name="state"
							onChange={handleStateChange}
							required
							items={states.map(({ sigla, nome }) => ({ label: nome, value: sigla }))}
						/>
					</InlineInputGroup>
					<InlineInputGroup>
						<FormSelect
							aria-label="Selecione sua cidade"
							placeholder="Cidade"
							name="city"
							onChange={handlePaymentChange}
							required
							items={cities ? cities.map(({ nome }) => ({ label: nome, value: nome })) : []}
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
					<FormTextarea
						name="message"
						placeholder="Mensagem para os noivos"
						onChange={handlePaymentChange}
					/>
					<CustomButton
						type="submit"
						color="orange"
						isLoading={submitting}
					>
						REALIZAR PAGAMENTO
					</CustomButton>
				</CustomForm>
			</CustomContainer>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	product: selectSingleProduct,
	currentUser: selectCurrentUser,
	states: selectStates,
	cities: selectCities,
	submitting: selectSubmitting,
})

const mapDispatchToProps = dispatch => ({
	fetchProductStart: id => dispatch(fetchProductStart(id)),
	createOrderStart: order => dispatch(createOrderStart(order)),
	fetchStatesStart: () => dispatch(fetchStatesStart()),
	fetchCitiesStart: state => dispatch(fetchCitiesStart(state)),
	setSubmitting: submitting => dispatch(setSubmitting(submitting)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)