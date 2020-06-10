import styled from 'styled-components'
import { Colors, Fonts } from '../../assets/styles/variables'

export const PaymentButtonContainer = styled.div`
	align-items: center;
	background: rgba(0, 0, 0, .75);
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	right: 0;
	text-align: center;
	top: 0;
	width: 100%;
	z-index: 8;
`

export const PaymentButtonContent = styled.div`
	background: #FFFFFF;
	min-width: 500px;
	padding: 20px 35px;
`

export const PaymentButtonTitle = styled.div`
	color: ${Colors.PURPLE};
	font-family: ${Fonts.CONDENSED};
	font-size: 2rem;
	margin-bottom: 15px;
`

export const PaymentButtonText = styled.span`
	color: ${Colors.MUTED};
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		color: ${Colors.DARK};
	}
`