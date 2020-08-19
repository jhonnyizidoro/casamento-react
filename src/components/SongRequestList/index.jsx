import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSongRequests } from '../../redux/user/user.selectors'
import { fetchSongRequestsStart } from '../../redux/user/user.actions'
import { formattedDate } from '../../utils/formatters'
import AppLoader from '../AppLoader'

import CustomTable from '../CustomTable'

const SongRequestList = ({ songRequests, fetchSongRequestsStart }) => {

	useEffect(() => {
		fetchSongRequestsStart()
	}, [fetchSongRequestsStart])

	return songRequests ?
		(
			<CustomTable
				title="Pedidos de música"
				labels={[
					'Música',
					'Usuário',
					'E-mail',
					'Data',
				]}
				items={songRequests.map(({ song, displayName, email, createdAt }) => [
					song,
					displayName,
					email,
					formattedDate(createdAt),
				])}
			/>
		)
		:
		<AppLoader />
}

const mapStateToProps = createStructuredSelector({
	songRequests: selectSongRequests,
})

const mapDispatchToProps = dispatch => ({
	fetchSongRequestsStart: () => dispatch(fetchSongRequestsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongRequestList)