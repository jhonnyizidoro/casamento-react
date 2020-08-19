import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectOrders } from '../../redux/order/order.selectors'
import { fetchOrdersStart } from '../../redux/order/order.actions'
import { formattedDate } from '../../utils/formatters'
import { getStatus } from '../../utils/pagarme'

import AppLoader from '../AppLoader'
import CustomTable from '../CustomTable'
import BoletoButton from '../BoletoButton'

const OrderList = ({ currentUser: { uid }, orders, fetchOrdersStart }) => {

	useEffect(() => {
		fetchOrdersStart(uid)
	}, [uid, fetchOrdersStart])

	const getBoletoPayment = (url, status) => {
		if (url && status === 'waiting_payment') {
			return <BoletoButton url={url} />
		} else if (!url) {
			return 'Aguardando link'
		} else {
			return 'boleto bancário'
		}
	}

	return orders ?
		(
			<CustomTable
				title={orders.length ? 'Meus pedidos' : 'Você ainda não realizou nenhum pedido'}
				labels={orders.length ? [
					'ID',
					'Item',
					'Status',
					'Ultima atualização',
					'Pagamento',
				] : []}
				items={orders.map(({ transaction, product, value, status, updatedAt, paymentMethod, url }) => [
					transaction,
					`${product} - R$${value.toFixed(2)}`,
					getStatus(status),
					formattedDate(updatedAt),
					paymentMethod === 'boleto' ? getBoletoPayment(url, status) : 'Cartão de crédito',
				])}
			/>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	orders: selectOrders,
})

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: userId => dispatch(fetchOrdersStart(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)