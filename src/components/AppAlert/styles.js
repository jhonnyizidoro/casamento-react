import styled from 'styled-components'

import { Shadows, Fonts } from '../../assets/styles/variables'

export const AppAlertContainer = styled.div`
	align-items: center;
	background: rgba(0, 0, 0, .35);
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	width: 100%;
	z-index: 9;
`

export const AppAlertContent = styled.div`
	background: #FFFFFF;
	box-shadow: ${Shadows.MEDIUM};
	max-width: calc(100vw - 30px);
	padding: 20px;
	text-align: center;
	width: 500px;
`

export const AppAlertTitle = styled.div`
	font-family: ${Fonts.CONDENSED};
	font-size: 2rem;
	margin: 10px 0;
`

export const AppAlertMessage = styled.div`
	margin-bottom: 20px;
`