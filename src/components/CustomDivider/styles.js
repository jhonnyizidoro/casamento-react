import styled from 'styled-components'

import { Colors } from '../../assets/styles/variables'

export const CustomDividerContainer = styled.div`
	position: relative;
	text-align: center;
	&::after,
	&::before {
		background: ${Colors.PINK};
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		top: 50%;
		width: 45%;
	}
	&::before {
		left: 0;
	}
	&::after {
		right: 0;
	}
`