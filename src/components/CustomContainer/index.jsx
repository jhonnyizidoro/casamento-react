import React from 'react'

import { CustomContainerElement } from './styles'

const CustomContainer = ({ children }) => (
	<CustomContainerElement>
		{children}
	</CustomContainerElement>
)

export default CustomContainer