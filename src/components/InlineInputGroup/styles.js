import styled from 'styled-components'
import { onMobile } from '../../assets/styles/media-queries'

export const InlineInputGroupWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	input,
	select {
		width: 49%;
	}
	${onMobile`
		flex-direction: column;
		input,
		select {
			width: 100%;
		}
	`}
`