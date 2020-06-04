import React from 'react'

import { CustomButtonElement, CustomButtonElementAsLink } from './styles'

const CustomButton = ({ children, to, ...otherProps }) => (
	<>
		{
			to ?
				<CustomButtonElementAsLink to={to} {...otherProps}>
					{children}
				</CustomButtonElementAsLink>
				:
				<CustomButtonElement {...otherProps}>
					{children}
				</CustomButtonElement>
		}
	</>
)

export default CustomButton