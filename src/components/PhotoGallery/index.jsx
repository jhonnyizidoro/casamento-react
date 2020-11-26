import React, { useState, useRef } from 'react'

import CustomContainer from '../CustomContainer'
import CustomButton from '../CustomButton'

import { PhotoGalleryContainer, PhotoGalleryImage, PhotoGalleryButtonContainer } from './styles'

const PhotoGallery = () => {
	const [maxHeight, setMaxHeight] = useState(800)
	const [buttonOpacity, setButtonOpacity] = useState(1)
	const galleryRef = useRef()
	const paths = require.context('../../assets/images/gallery')
	const images = paths.keys().map(path => paths(path))

	const increaseMaxHeight = () => {
		setMaxHeight(maxHeight + 800)
		setTimeout(() => {
			if (galleryRef.current.scrollHeight <= galleryRef.current.clientHeight) {
				setButtonOpacity(0)
			}
		}, 1100)
	}

	return (
		<CustomContainer>
			<PhotoGalleryContainer maxHeight={maxHeight} ref={galleryRef}>
				{
					images.map(src => <PhotoGalleryImage key={src} src={src} alt="Foto de Jenyfer e Leonardo" />)
				}
			</PhotoGalleryContainer>
			<PhotoGalleryButtonContainer buttonOpacity={buttonOpacity}>
				<CustomButton onClick={increaseMaxHeight}>VER MAIS FOTOS</CustomButton>
			</PhotoGalleryButtonContainer>
		</CustomContainer>
	)
}

export default PhotoGallery