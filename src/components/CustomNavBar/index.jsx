import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { logout } from '../../redux/user/user.actions'
import { selectNavBarState } from '../../redux/app/app.selectors'
import { setNavBarState } from '../../redux/app/app.actions'

import CustomContainer from '../CustomContainer'
import LogoImage from '../../assets/images/logos/logo.png'
import HamburgerMenu from '../HamburgerMenu'

import {
	NavBarContainer,
	NavBarLogoImage,
	NavBarLinks,
	NavBarItemAsLink,
	NavBarItemAsText,
} from './styles'

const CustomNavBar = ({ currentUser, logout, navBarState, setNavBarState }) => (
	<CustomContainer>
		<NavBarContainer>
			<NavBarLogoImage src={LogoImage} alt="Logo Jenyfer e Leonardo" />
			<NavBarLinks isActive={navBarState} onClick={() => setNavBarState(!navBarState)}>
				<NavBarItemAsLink exact activeClassName="active" to="/">INÍCIO</NavBarItemAsLink>
				<NavBarItemAsLink exact activeClassName="active" to="/products">PRODUTOS</NavBarItemAsLink>
				{
					currentUser ?
						<>
							{
								['jhonny-cwb@hotmail.com', 'jenymenarim@gmail.com', 'leonardovieiradt47@gmail.com'].includes(currentUser.email) &&
								<>
									<NavBarItemAsLink exact activeClassName="active" to="/insert-product">INSERIR PRODUTO</NavBarItemAsLink>
									<NavBarItemAsLink exact activeClassName="active" to="/song-requests">PEDIDOS DE MÚSICA</NavBarItemAsLink>
									<NavBarItemAsLink exact activeClassName="active" to="/orders">TODOS OS PEDIDOS</NavBarItemAsLink>
								</>
							}
							<NavBarItemAsLink exact activeClassName="active" to="/my-orders">MEUS PEDIDOS</NavBarItemAsLink>
							<NavBarItemAsText onClick={logout}>SAIR</NavBarItemAsText>
						</>
						:
						<NavBarItemAsLink exact activeClassName="active" to="/sign-in">LOGIN</NavBarItemAsLink>
				}
			</NavBarLinks>
			<HamburgerMenu />
		</NavBarContainer>
	</CustomContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	navBarState: selectNavBarState,
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	setNavBarState: state => dispatch(setNavBarState(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)