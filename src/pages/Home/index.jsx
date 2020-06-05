import React from 'react'

import CustomHeader from '../../components/CustomHeader'
import AboutUs from '../../components/AboutUs'
import GiftsList from '../../components/GiftsList'
import PhotoGallery from '../../components/PhotoGallery'
import ConfirmationForm from '../../components/ConfirmationForm'
import AboutTheEvent from '../../components/AboutTheEvent'

const HomePage = () => (
	<>
		<CustomHeader />
		<AboutUs />
		<GiftsList />
		<PhotoGallery />
		<ConfirmationForm />
		<AboutTheEvent />
	</>
)

export default HomePage