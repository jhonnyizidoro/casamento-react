import React from 'react'

import CustomIcon from '../CustomIcon'
import CustomContainer from '../CustomContainer'
import CustomDivider from '../CustomDivider'

import LeonardoImage from '../../assets/images/about/leonardo.jpg'
import JenyferImage from '../../assets/images/about/jenyfer.jpg'
import JenyferAndLeonardoImage from '../../assets/images/about/jenyfer-and-leonardo.jpg'
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as WhatsAppIcon } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'

import {
	AboutUsTitle,
	AboutUsContainer,
	AboutUsSection,
	AboutUsContent,
	AboutUsSubtitle,
	AboutUsText,
	AboutUsImage,
	AboutUsContact,
	AboutUsContactBlock,
	AboutUsContactBlockLink,
} from './styles'

const AboutUs = () => (
	<CustomContainer>
		<AboutUsTitle>CONHEÇA UM POUCO DO CASAL MAIS FELIZ DO MUNDO</AboutUsTitle>
		<AboutUsContainer>
			<AboutUsSection>
				<AboutUsContent>
					<AboutUsSubtitle>Leonardo</AboutUsSubtitle>
					<AboutUsText>Lindo por dentro e por fora. O Léo tem duas coisas dentro dele que me fazem o admirar demais: um coração muito bondoso e muita garra. Um menino cheio de sonhos e ao mesmo tempo um homem realizador desses sonhos! Sempre humilde, busca aprender todos os dias. Enfrenta situações difíceis como uma pedra, mas permanece com um coração sensível e doce. É impossível não me apaixonar por ele todos os dias.</AboutUsText>
				</AboutUsContent>
				<AboutUsImage src={LeonardoImage} alt="Leonardo" />
				<AboutUsContact>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<CalendarIcon />
						</CustomIcon>
						01/01/1997
					</AboutUsContactBlock>
					<AboutUsContactBlockLink href="https://www.facebook.com/leonardo.vieira.50309" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<FacebookIcon />
						</CustomIcon>
						Leonardo Vieira
					</AboutUsContactBlockLink>
					<AboutUsContactBlockLink href="https://api.whatsapp.com/send?phone=5541996893987&text=Ol%C3%A1.%20estou%20no%20site%20do%20seu%20casamento%20(%3A" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<WhatsAppIcon />
						</CustomIcon>
						(41) 99689-3987
					</AboutUsContactBlockLink>
					<AboutUsContactBlockLink href="https://www.instagram.com/leonardo_anterio" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<InstagramIcon />
						</CustomIcon>
						@leonardo_anterio
					</AboutUsContactBlockLink>
				</AboutUsContact>
			</AboutUsSection>
			<AboutUsSection>
				<AboutUsContent>
					<AboutUsSubtitle>Jenyfer</AboutUsSubtitle>
					<AboutUsText>Uma mulher incrível que chegou em minha vida e me mostrou a felicidade que tanto se fala e o amor que tanto se procura. Admirável pela sua garra, dedicações, conquistas e disciplinas. Cativante no seu falar, agir e ao lidar com o próximo. Encantadora na sua beleza e no seu jeito princesa de ser, oh mulher linda, difícil não se apaixonar todos os dias. Grato eternamente em ter essa pessoa incrível ao meu lado.</AboutUsText>
				</AboutUsContent>
				<AboutUsImage src={JenyferImage} alt="Jenyfer" />
				<AboutUsContact>
					<AboutUsContactBlock>
						<CustomIcon fill="purple" marginRight={5}>
							<CalendarIcon />
						</CustomIcon>
						06/01/1997
					</AboutUsContactBlock>
					<AboutUsContactBlockLink href="https://www.facebook.com/profile.php?id=100008158421493" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<FacebookIcon />
						</CustomIcon>
						Jenyfer Menarim
					</AboutUsContactBlockLink>
					<AboutUsContactBlockLink href="https://api.whatsapp.com/send?phone=5541987159084&text=Ol%C3%A1.%20estou%20no%20site%20do%20seu%20casamento%20(%3A" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<WhatsAppIcon />
						</CustomIcon>
						(41) 98715-9084
					</AboutUsContactBlockLink>
					<AboutUsContactBlockLink href="https://www.instagram.com/jenymenarim/" target="_blank" rel="noopener">
						<CustomIcon fill="purple" marginRight={5}>
							<InstagramIcon />
						</CustomIcon>
						@jenymenarim
					</AboutUsContactBlockLink>
				</AboutUsContact>
			</AboutUsSection>
		</AboutUsContainer>
		<CustomDivider />
		<AboutUsSection>
			<AboutUsContent>
				<AboutUsSubtitle>Jenyfer e Leonardo</AboutUsSubtitle>
				<AboutUsText>
					<strong>Histórias de amor existem e às vezes nem nós mesmos acreditamos na nossa!<br /></strong>
					Dois amigos que amavam andar de roller um com o outro começaram a brilhar seus olhos para esse amor disfarçado de amizade. Esse tempo foi marcado por vários bate-volta na praia e alguns nasceres do sol de mãos dadas, até que o amor desabrochou. Nosso namoro foi sempre baseado em “nossa como a gente consegue combinar em tudo?”.
					Somos tão parecidos quanto o bordô é do marsala, nos completamos de uma forma que nos faz acreditar até que existe sim alma gêmea. E foi esse amor tão puro e simples que nos deu a certeza mais concreta dentro de nós: queremos passar o resto da vida juntos!
					Não somos perfeitos, mas somos livres para sermos imperfeitos um com o outro, e poder viver isso é único e maravilhoso. Nosso amor pinta nossos dias e colore nossas almas.
					Bem-vindos ao começo de um para sempre!
				</AboutUsText>
			</AboutUsContent>
			<AboutUsImage src={JenyferAndLeonardoImage} alt="Jenyfer e Leonardo" />
		</AboutUsSection>
	</CustomContainer>
)

export default AboutUs