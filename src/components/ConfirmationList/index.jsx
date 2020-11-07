import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectConfirmations } from '../../redux/user/user.selectors'
import { fetchConfirmationsStart } from '../../redux/user/user.actions'
import { formattedDate } from '../../utils/formatters'
import AppLoader from '../AppLoader'

import CustomTable from '../CustomTable'

const ConfirmationList = ({ confirmations, fetchConfirmationsStart }) => {

	useEffect(() => {
		fetchConfirmationsStart()
	}, [fetchConfirmationsStart])

	return confirmations ?
		(
			<CustomTable
				title="Confirmações"
				labels={[
					'Convidado',
					'Música',
					'E-mail',
					'Data',
				]}
				items={confirmations.map(({ guest, song, email, createdAt }) => [
					guest,
					song,
					email,
					formattedDate(createdAt),
				])}
			/>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	confirmations: selectConfirmations,
})

const mapDispatchToProps = dispatch => ({
	fetchConfirmationsStart: () => dispatch(fetchConfirmationsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationList)