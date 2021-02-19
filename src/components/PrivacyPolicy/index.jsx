import React from 'react'

import {
	PrivacyPolicyWrapper,
	PrivacyPolicyTitle,
	PrivacyPolicyParagraph,
	PrivacyPolicyLink,
	PrivacyPolicySubtitle,
	PrivacyPolicyList,
	PrivacyPolicyListItem,
	PrivacyPolicyListStrong
} from './styles'

const PrivacyPolicy = () => <PrivacyPolicyWrapper>
	<PrivacyPolicyTitle>Política Privacidade</PrivacyPolicyTitle>
	<PrivacyPolicyParagraph>A sua privacidade é importante para nós. É política do Casamento Leonardo e Jenyfer respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <PrivacyPolicyLink href="https://casamentoleoejeny.com.br">Casamento Leonardo e Jenyfer</PrivacyPolicyLink>, e outros sites que possuímos e operamos.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</PrivacyPolicyParagraph>
	<PrivacyPolicySubtitle>Compromisso do Usuário</PrivacyPolicySubtitle>
	<PrivacyPolicyParagraph>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Casamento Leonardo e Jenyfer oferece no site e com caráter enunciativo, mas não limitativo:</PrivacyPolicyParagraph>
	<PrivacyPolicyList>
		<PrivacyPolicyListItem>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</PrivacyPolicyListItem>
		<PrivacyPolicyListItem>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, casas de apostas (ex.: Bet.pt), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</PrivacyPolicyListItem>
		<PrivacyPolicyListItem>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Casamento Leonardo e Jenyfer, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</PrivacyPolicyListItem>
	</PrivacyPolicyList>
	<PrivacyPolicySubtitle>Mais informações</PrivacyPolicySubtitle>
	<PrivacyPolicyParagraph>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</PrivacyPolicyParagraph>
	<PrivacyPolicyParagraph>Esta política é efetiva a partir de <PrivacyPolicyListStrong>Fevereiro/2021</PrivacyPolicyListStrong>.</PrivacyPolicyParagraph>
</PrivacyPolicyWrapper>

export default PrivacyPolicy