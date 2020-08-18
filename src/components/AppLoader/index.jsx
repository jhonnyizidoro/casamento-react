import React from 'react'

import { ReactComponent as Loader } from '../../assets/images/app/loader.svg'

import { AppLoaderContainer } from './styles'

const AppLoader = () => (
	<AppLoaderContainer>
		<Loader />
	</AppLoaderContainer>
)

export default AppLoader