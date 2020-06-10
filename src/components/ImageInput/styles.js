import styled from 'styled-components'

import { Shadows } from '../../assets/styles/variables'

export const ImageInputLabel = styled.label`
	box-shadow: ${Shadows.SMALL};
	cursor: pointer;
	display: block;
	margin-bottom: 10px;
	padding-top: 75%;
	position: relative;
	transition: 450ms;
	width: 100%;
	&:hover {
		transform: scale(1.01);
	}
`

export const ImageInputElement = styled.img`
	height: 100%;
	object-fit: cover;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`

export const ImageInputInput = styled.input`
	visibility: hidden;
`