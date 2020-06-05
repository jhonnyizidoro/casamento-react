import React from 'react'

import { CustomFormTitle, CustomFormElement } from './styles'

const CustomForm = ({ children, title, onSubmit }) => (
	<>
		<CustomFormTitle>{title}</CustomFormTitle>
		<CustomFormElement onSubmit={onSubmit}>{children}</CustomFormElement>
	</>
)

export default CustomForm