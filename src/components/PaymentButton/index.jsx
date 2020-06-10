import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { PayPalButton } from 'react-paypal-button-v2'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { insertOrderStart } from '../../redux/order/order.actions'

import { PaymentButtonContainer, PaymentButtonContent, PaymentButtonTitle, PaymentButtonText } from './styles'

const PaymentButton = ({ value, onClose, currentUser, insertOrderStart }) => {

	const createOrder = (data, { order: { create } }) => create({
		purchase_units: [{
			amount: {
				value,
			},
		}],
	})

	const onSuccess = (details, data) => {
		insertOrderStart({
			details,
			data,
			currentUser,
		})
		onClose()
	}

	return (
		<PaymentButtonContainer>
			<PaymentButtonContent>
				<PaymentButtonTitle>SELECIONE A FORMA DE PAGAMENTO</PaymentButtonTitle>
				<PayPalButton
					createOrder={createOrder}
					onSuccess={onSuccess}
					options={{
						currency: 'BRL',
						clientId: 'ATgQKxAp2GYaMdsmL4PySM_MuBQZuIMDESYgDfoI_6X0ACosQ1_oRhQWO2p1B5pX97zAMlTfCDEOL3hH',
					}}
				/>
				<PaymentButtonText onClick={onClose}>cancelar</PaymentButtonText>
			</PaymentButtonContent>
		</PaymentButtonContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	insertOrderStart: order => dispatch(insertOrderStart(order)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentButton)