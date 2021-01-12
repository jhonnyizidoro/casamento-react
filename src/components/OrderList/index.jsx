import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectOrders } from '../../redux/order/order.selectors'
import { fetchOrdersStart } from '../../redux/order/order.actions'
import { formattedDate } from '../../utils/formatters'
import { getStatus } from '../../utils/pagarme'

import AppLoader from '../AppLoader'
import CustomTable from '../CustomTable'

const UserOrderList = ({ orders, fetchOrdersStart }) => {

	useEffect(() => {
		fetchOrdersStart()
	}, [fetchOrdersStart])

	return orders ?
		(
			<>
				<CustomTable
					title="Pedidos aprovados"
					labels={[
						'ID',
						'E-mail',
						'Item',
						'Status',
						'Mensagem',
					]}
					items={orders.filter(({ status }) => status === 'paid').map(({ userEmail, transaction, product, value, status, updatedAt, message }) => [
						transaction,
						userEmail,
						`R$${value.toFixed(2)} - ${product}`,
						`${getStatus(status)} - ${formattedDate(updatedAt)}`,
						message,
					])}
				/>
				<CustomTable
					title="Pedidos em andamento"
					labels={[
						'ID',
						'E-mail',
						'Item',
						'Status',
						'Mensagem',
					]}
					items={orders.filter(({ status }) => status !== 'paid').map(({ userEmail, transaction, product, value, status, updatedAt, message }) => [
						transaction,
						userEmail,
						`R$${value.toFixed(2)} - ${product}`,
						`${getStatus(status)} - ${formattedDate(updatedAt)}`,
						message,
					])}
				/>
			</>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	orders: selectOrders,
})

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderList)