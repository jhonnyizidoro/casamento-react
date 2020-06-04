import React from 'react'

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import HeaderVideo from '../../assets/videos/header-background.mp4'
import CustomIcon from '../CustomIcon'

import {
	CustomHeaderContainer,
	CustomHeaderBackground,
	CustomHeaderContent,
	CustomHeaderTitle,
	CustomHeaderDate,
	CustomHeaderTextOrange,
	CustomHeaderSubtitle,
	CustomHeaderHearts,
} from './styles'

const CustomHeader = () => (
	<CustomHeaderContainer>
		<CustomHeaderBackground src={HeaderVideo} autoPlay loop muted />
		<CustomHeaderContent>
			<CustomHeaderTitle>Jenyfer &<br />Leonardo</CustomHeaderTitle>
			<CustomHeaderDate>
				<CustomHeaderTextOrange>-</CustomHeaderTextOrange>
				01
				<CustomHeaderTextOrange>.</CustomHeaderTextOrange>
				01
				<CustomHeaderTextOrange>.</CustomHeaderTextOrange>
				2020
				<CustomHeaderTextOrange>-</CustomHeaderTextOrange>
			</CustomHeaderDate>
			<CustomHeaderSubtitle>NÓS VAMOS NOS CASAR</CustomHeaderSubtitle>
			<CustomHeaderHearts>
				<CustomIcon fill="purple">
					<HeartIcon />
				</CustomIcon>
				<CustomIcon fill="white">
					<HeartIcon />
				</CustomIcon>
			</CustomHeaderHearts>
		</CustomHeaderContent>
	</CustomHeaderContainer>
)

export default CustomHeader