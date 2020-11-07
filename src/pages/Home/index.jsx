import React from 'react'

import CustomHeader from '../../components/CustomHeader'
import AboutUs from '../../components/AboutUs'
import GiftsList from '../../components/GiftsList'
import PhotoGallery from '../../components/PhotoGallery'
import ConfirmationForm from '../../components/ConfirmationForm'
import AboutTheEvent from '../../components/AboutTheEvent'
import EventCountdown from '../../components/EventCountdown'
import CustomFooter from '../../components/CustomFooter'

const HomePage = () => (
	<>
		<CustomHeader />
		<AboutUs />
		<GiftsList />
		<PhotoGallery />
		<ConfirmationForm />
		<AboutTheEvent />
		<EventCountdown />
		<CustomFooter />
	</>
)

export default HomePage