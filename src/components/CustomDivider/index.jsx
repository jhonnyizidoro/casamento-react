import React from 'react'

import { ReactComponent as DividerIcon } from '../../assets/icons/divider.svg'
import CustomIcon from '../CustomIcon'

import { CustomDividerContainer } from './styles'

const CustomDivider = () => (
	<CustomDividerContainer>
		<CustomIcon size={100} fill="pink">
			<DividerIcon />
		</CustomIcon>
	</CustomDividerContainer>
)

export default CustomDivider