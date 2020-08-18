import React from 'react'

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import HeaderVideo from '../../assets/videos/header-background.mp4'
import HeaderImage from '../../assets/images/header/header-background-image.jpg'
import CustomIcon from '../CustomIcon'

import {
	CustomHeaderContainer,
	CustomHeaderBackground,
	CustomHeaderBackgroundImage,
	CustomHeaderContent,
	CustomHeaderTitle,
	CustomHeaderDate,
	CustomHeaderTextOrange,
	CustomHeaderSubtitle,
	CustomHeaderHearts,
} from './styles'

const CustomHeader = () => (
	<CustomHeaderContainer>
		<CustomHeaderBackgroundImage src={HeaderImage} alt="Jenyfer e Leonardo" />
		<CustomHeaderBackground
			src={HeaderVideo}
			autoPlay
			loop
			muted
			type="video/mp4"
			controls={false}
		/>
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