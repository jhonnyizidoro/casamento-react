import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSongRequests } from '../../redux/user/user.selectors'
import { fetchSongRequestsStart } from '../../redux/user/user.actions'
import { formattedDate } from '../../utils/formatters'

import CustomTable from '../CustomTable'

const SongRequestList = ({ songRequests, fetchSongRequestsStart }) => {

	useEffect(() => {
		fetchSongRequestsStart()
	}, [fetchSongRequestsStart])

	return songRequests && <CustomTable
		onClick={console.log(songRequests.map(({ song, displayName, email, createdAt }) => [
			song,
			displayName,
			email,
			createdAt,
		]))}
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
}

const mapStateToProps = createStructuredSelector({
	songRequests: selectSongRequests,
})

const mapDispatchToProps = dispatch => ({
	fetchSongRequestsStart: () => dispatch(fetchSongRequestsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongRequestList)