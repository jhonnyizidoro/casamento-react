import { createGlobalStyle } from 'styled-components'

import { Fonts } from './variables'
import { onMobile } from './media-queries'

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	body {
		font-family: ${Fonts.DEFAULT}, sans-serif;
		${onMobile`
			padding-top: 65px;
		`}
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	img,
	body,
	figure {
		margin: 0;
	}
	
	a {
		background-color: transparent;
		color: inherit;
		cursor: pointer;
		text-decoration: none;
		&:visited {
			text-decoration: none;
		}
		&:active,
		&:hover {
			outline: 0;
		}
	}
	
	figure,
	footer,
	header,
	main,
	nav,
	section {
		display: block;
	}
	
	b,
	strong {
		font-weight: bold;
	}
	
	small {
		font-size: 80%;
	}
	
	button,
	input,
	select,
	textarea {
		color: inherit;
		font: inherit;
		margin: 0;
	}
	
	button {
		-webkit-appearance: button;
		cursor: pointer;
		overflow: visible;
		&:disabled {
			cursor: default;
		}
	}
	
	button,
	select {
		text-transform: none;
	}
	
	input {
		line-height: normal;
	}
	
	textarea {
		overflow: auto;
		resize: none;
	}
`

export default GlobalStyles