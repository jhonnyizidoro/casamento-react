import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectAppAlert } from '../../redux/app/app.selectors'
import { setAlert } from '../../redux/app/app.actions'

import CustomButton from '../CustomButton'
import CustomIcon from '../CustomIcon'
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg'
import { ReactComponent as SuccessIcon } from '../../assets/icons/success.svg'

import {
	AppAlertContainer,
	AppAlertContent,
	AppAlertTitle,
	AppAlertMessage,
} from './styles'

const AppAlert = ({ alert, clearAlert }) => {
	const { type, title, message } = alert || {}
	return alert && (
		<AppAlertContainer>
			<AppAlertContent>
				<CustomIcon size={100} fill="purple">
					{
						type === 'error' ? <ErrorIcon /> : <SuccessIcon />
					}
				</CustomIcon>
				<AppAlertTitle>{title}</AppAlertTitle>
				<AppAlertMessage>{message}</AppAlertMessage>
				<CustomButton onClick={clearAlert} type="button">OK!</CustomButton>
			</AppAlertContent>
		</AppAlertContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	alert: selectAppAlert,
})

const mapDispatchToProps = dispatch => ({
	clearAlert: () => dispatch(setAlert(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppAlert)