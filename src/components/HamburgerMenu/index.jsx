import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectNavBarState } from '../../redux/app/app.selectors'
import { setNavBarState } from '../../redux/app/app.actions'

import { HamburgerMenuWrapper, HamburgerMenuBlock } from './styles'

const HamburgerMenu = ({ setNavBarState, navBarState }) => (
	<HamburgerMenuWrapper onClick={() => setNavBarState(!navBarState)} isActive={navBarState}>
		<HamburgerMenuBlock />
	</HamburgerMenuWrapper>
)

const mapStateToProps = createStructuredSelector({
	navBarState: selectNavBarState,
})

const mapDispatchToProps = dispatch => ({
	setNavBarState: state => dispatch(setNavBarState(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu)