import React, { useState } from 'react'

import NoImage from '../../assets/images/products/no-image.png'

import { ImageInputLabel, ImageInputElement, ImageInputInput } from './styles'

export const ImageInput = ({ name, onChange, ...otherProps }) => {
	const id = Math.floor(Math.random() * 1000)
	const [src, setSrc] = useState(NoImage)

	const handleChange = event => {
		const image = event.target.files[0]
		const reader = new FileReader()
		reader.onloadend = () => {
			setSrc(reader.result)
			onChange({ target: { name, value: reader.result } })
		}
		reader.readAsDataURL(image)
	}

	return (
		<ImageInputLabel htmlFor={id}>
			<ImageInputElement src={src} />
			<ImageInputInput
				id={id}
				type="file"
				onChange={handleChange}
				accept="image/png, image/jpeg, image/jpg"
				{...otherProps}
			/>
		</ImageInputLabel>
	)
}

export default ImageInput