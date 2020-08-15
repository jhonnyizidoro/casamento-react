import styled from 'styled-components'

export const InlineInputGroupWrapper = styled.div`
	display: flex;
	input,
	select {
		flex-grow: 1;
	}
	input:not(:last-child),
	select:not(:last-child) {
		margin-right: 10px;
	}
`