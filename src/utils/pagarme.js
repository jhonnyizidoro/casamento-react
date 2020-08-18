import pagarme from 'pagarme'

export const hash = ({ cardNumber, holderName, expirationDate, cardCvv }) => new Promise(resolve => {
	pagarme.client.connect({ encryption_key: 'ek_test_OnXj9m2qrxGiv1lq0k4SCwVUHgwMuH' })
	.then(client => client.security.encrypt({
		card_number: cardNumber,
		card_holder_name: holderName,
		card_expiration_date: expirationDate,
		card_cvv: cardCvv,
	}))
	.then(hash => resolve(hash))
})

export const getStatus = status => {
	switch (status) {
		case 'processing':
			return 'Processando'
		case 'authorized':
			return 'Pagamento autorizado'
		case 'paid':
			return 'Pagamento realizado'
		case 'refunded':
			return 'Valor estornado'
		case 'waiting_payment':
			return 'Aguardando pagamento'
		case 'pending_refund':
			return 'Aguardando estorno'
		case 'refused':
			return 'Recusada'
		case 'chargedback':
			return 'Devolução solicitada'
		case 'analyzing':
			return 'Em análise'
		case 'pending_review':
			return 'Análise pendente'
		default:
			return 'Não informado'
	}
}