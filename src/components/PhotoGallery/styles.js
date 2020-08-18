import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Shadows } from '../../assets/styles/variables'

export const PhotoGalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-height: ${({ maxHeight }) => maxHeight}px;
	overflow: hidden;
	padding-bottom: 120px;
	transition: 1s;
`

export const PhotoGalleryImage = styled(LazyLoadImage)`
	filter: drop-shadow(${Shadows.SMALL});
	height: 230px;
	flex-grow: 1;
	object-fit: cover;
	padding: 7px;
`

export const PhotoGalleryButtonContainer = styled.div`
	background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #FFFFFF);
	padding-top: 60px;
	text-align: center;
	transform: translateY(-100%);
`