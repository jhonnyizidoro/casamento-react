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

const OrderList = ({ currentUser: { uid }, orders, fetchOrdersStart }) => {

	useEffect(() => {
		fetchOrdersStart(uid)
	}, [uid, fetchOrdersStart])

	return orders ?
		(
			<CustomTable
				title={orders.length ? 'Meus pedidos' : 'Você ainda não realizou nenhum pedido'}
				labels={orders.length ? [
					'ID',
					'Item',
					'Valor',
					'Status',
					'Criado em',
					'Ultima atualização',
				] : []}
				items={orders.map(({ transaction, product, value, status, createdAt, updatedAt }) => [
					transaction,
					product,
					`RS${value.toFixed(2)}`,
					getStatus(status),
					formattedDate(createdAt),
					formattedDate(updatedAt),
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