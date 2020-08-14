import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectOrders } from '../../redux/order/order.selectors'
import { fetchOrdersStart } from '../../redux/order/order.actions'
import { formattedDate } from '../../utils/formatters'

import CustomContainer from '../CustomContainer'

import { OrderListContainer, OrderListTitle, OrderListRow, OrderListColumn } from './styles'

const OrderList = ({ currentUser: { uid }, orders, fetchOrdersStart }) => {

	useEffect(() => {
		fetchOrdersStart(uid)
	}, [uid, fetchOrdersStart])

	return orders && (
		<CustomContainer>
			<OrderListTitle>Seus pedidos</OrderListTitle>
			<OrderListContainer>
				<OrderListRow>
					<OrderListColumn>ID</OrderListColumn>
					<OrderListColumn>Item</OrderListColumn>
					<OrderListColumn>Valor</OrderListColumn>
					<OrderListColumn>Status</OrderListColumn>
					<OrderListColumn>Criado em</OrderListColumn>
					<OrderListColumn>Última atualização</OrderListColumn>
				</OrderListRow>
				{
					orders.map(({ id, transaction, product, value, status, createdAt, updatedAt }) => <OrderListRow key={id}>
						<OrderListColumn>{transaction}</OrderListColumn>
						<OrderListColumn>{product}</OrderListColumn>
						<OrderListColumn>R${value.toFixed(2)}</OrderListColumn>
						<OrderListColumn>{status}</OrderListColumn>
						<OrderListColumn>{formattedDate(createdAt)}</OrderListColumn>
						<OrderListColumn>{formattedDate(updatedAt)}</OrderListColumn>
					</OrderListRow>)
				}
			</OrderListContainer>
		</CustomContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	orders: selectOrders,
})

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: userId => dispatch(fetchOrdersStart(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)