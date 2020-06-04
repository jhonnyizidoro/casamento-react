import styled from 'styled-components'
import { Colors, Fonts, Shadows } from '../../assets/styles/variables'

export const CustomHeaderContainer = styled.header`
	align-items: center;
	display: flex;
	height: calc(100vh - 95px);
	justify-content: center;
	min-height: 500px;
	position: relative;
`

export const CustomHeaderBackground = styled.video`
	height: 100%;
	object-fit: cover;
	object-position: 50% 60%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: -1;
`

export const CustomHeaderContent = styled.h1`
	color: #FFFFFF;
	font-weight: normal;
	text-align: center;
`

export const CustomHeaderTitle = styled.div`
	font-family: ${Fonts.STRONG_CURSIVE};
	font-size: 5rem;
	line-height: 1.3;
	text-shadow: ${Shadows.SMALL};
	transform: rotateZ(-8deg);
`

export const CustomHeaderDate = styled.div`
	font-family: ${Fonts.STRONG_CURSIVE};
	transform: rotateZ(-8deg);
`

export const CustomHeaderSubtitle = styled.div`
	border-bottom: 1px solid #FFFFFF;
	border-top: 1px solid #FFFFFF;
	display: inline-block;
	font-size: 1.2rem;
	letter-spacing: 1px;
	margin-top: 40px;
	padding: 5px 15px;
	position: relative;
	&::after,
	&::before {
		content: '***';
		font-size: 1rem;
		position: absolute;
		top: 10px;
	}
	&::after {
		right: -20px;
	}
	&::before {
		left: -20px;
	}
`

export const CustomHeaderHearts = styled.div`
	margin: 0 auto;
	position: relative;
	width: 130px;
	&::after,
	&::before {
		content: '';
		height: 2px;
		position: absolute;
		top: 23px;
		width: 35px;
	}
	&::before {
		background: #FFFFFF;
		left: 0;
	}
	&::after {
		background: ${Colors.PURPLE};
		right: 0;
	}
`

export const CustomHeaderTextOrange = styled.span`
	color: ${Colors.ORANGE}
`