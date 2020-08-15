import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { logout } from '../../redux/user/user.actions'

import CustomContainer from '../CustomContainer'
import LogoImage from '../../assets/images/logos/logo.png'

import {
	NavBarContainer,
	NavBarLogoImage,
	NavBarLinks,
	NavBarItemAsLink,
	NavBarItemAsText,
} from './styles'

const CustomNavBar = ({ currentUser, logout }) => (
	<CustomContainer>
		<NavBarContainer>
			<NavBarLogoImage src={LogoImage} />
			<NavBarLinks>
				<NavBarItemAsLink exact activeClassName="active" to="/">INÍCIO</NavBarItemAsLink>
				<NavBarItemAsLink exact activeClassName="active" to="/products">PRODUTOS</NavBarItemAsLink>
				{
					currentUser ?
						<>
							<NavBarItemAsLink exact activeClassName="active" to="/insert-product">INSERIR PRODUTO</NavBarItemAsLink>
							<NavBarItemAsLink exact activeClassName="active" to="/song-requests">PEDIDOS DE MÚSICA</NavBarItemAsLink>
							<NavBarItemAsLink exact activeClassName="active" to="/my-orders">MEUS PEDIDOS</NavBarItemAsLink>
							<NavBarItemAsText onClick={logout}>SAIR</NavBarItemAsText>
						</>
						:
						<NavBarItemAsLink exact activeClassName="active" to="/sign-in">LOGIN</NavBarItemAsLink>
				}
			</NavBarLinks>
		</NavBarContainer>
	</CustomContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)