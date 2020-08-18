import React, { useState } from 'react'

import CustomContainer from '../CustomContainer'
import CustomButton from '../CustomButton'

import { PhotoGalleryContainer, PhotoGalleryImage, PhotoGalleryButtonContainer } from './styles'

const PhotoGallery = () => {
	const [maxHeight, setMaxHeight] = useState(800)
	const paths = require.context('../../assets/images/gallery')
	const images = paths.keys().map(path => paths(path))

	return (
		<CustomContainer>
			<PhotoGalleryContainer maxHeight={maxHeight}>
				{
					images.map(src => <PhotoGalleryImage key={src} src={src} alt="Foto de Jenyfer e Leonardo" />)
				}
			</PhotoGalleryContainer>
			<PhotoGalleryButtonContainer>
				<CustomButton onClick={() => setMaxHeight(maxHeight + 800)}>VER MAIS FOTOS</CustomButton>
			</PhotoGalleryButtonContainer>
		</CustomContainer>
	)
}

export default PhotoGallery