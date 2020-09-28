import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectUserOrders } from '../../redux/order/order.selectors'
import { fetchUserOrdersStart } from '../../redux/order/order.actions'
import { formattedDate } from '../../utils/formatters'
import { getStatus } from '../../utils/pagarme'

import AppLoader from '../AppLoader'
import CustomTable from '../CustomTable'
import BoletoButton from '../BoletoButton'

const UserOrderList = ({ currentUser: { uid }, userOrders, fetchUserOrdersStart }) => {

	useEffect(() => {
		fetchUserOrdersStart(uid)
	}, [uid, fetchUserOrdersStart])

	const getBoletoPayment = (url, status) => {
		if (url && status === 'waiting_payment') {
			return <BoletoButton url={url} />
		} else if (!url) {
			return 'Aguardando link'
		} else {
			return 'boleto bancário'
		}
	}

	return userOrders ?
		(
			<CustomTable
				title={userOrders.length ? 'Meus pedidos' : 'Você ainda não realizou nenhum pedido'}
				labels={userOrders.length ? [
					'ID',
					'Item',
					'Status',
					'Ultima atualização',
					'Pagamento',
				] : []}
				items={userOrders.map(({ transaction, product, value, status, updatedAt, paymentMethod, url }) => [
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
	userOrders: selectUserOrders,
})

const mapDispatchToProps = dispatch => ({
	fetchUserOrdersStart: userId => dispatch(fetchUserOrdersStart(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderList)