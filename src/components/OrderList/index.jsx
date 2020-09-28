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
			<CustomTable
				title={orders.length ? 'Todos os pedidos' : 'Nenhum pedido realizado'}
				labels={orders.length ? [
					'ID',
					'Item',
					'Status',
					'Ultima atualização',
					'Mensagem',
				] : []}
				items={orders.map(({ transaction, product, value, status, updatedAt, message }) => [
					transaction,
					`${product} - R$${value.toFixed(2)}`,
					getStatus(status),
					formattedDate(updatedAt),
					message,
				])}
			/>
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