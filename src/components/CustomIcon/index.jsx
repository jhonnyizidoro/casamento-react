import React from 'react'

import { CustomIconContainer } from './styles'

const CustomIcon = ({ children, ...props }) => (
	<CustomIconContainer {...props}>
		{children}
	</CustomIconContainer>
)

export default CustomIcon