import { css } from 'styled-components'

export const onMobile = (...args) => css`
	@media (max-width: 800px) {
		${css(...args)}
	}
`