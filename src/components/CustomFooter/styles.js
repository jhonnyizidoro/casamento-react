import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'
import { onMobile } from '../../assets/styles/media-queries'

export const CustomFooterElement = styled.footer`
	align-items: center;
	background: ${Colors.PINK};
	color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	padding: 50px;
	${onMobile`
		flex-direction: column;
		text-align: center;
	`}
`

export const CustomFooterText = styled.div`
	margin-bottom: 7px;
`

export const CustomFooterDeveloper = styled.div`
	${onMobile`
		margin-top: 25px;
	`}
`

export const CustomFooterLink = styled.a``