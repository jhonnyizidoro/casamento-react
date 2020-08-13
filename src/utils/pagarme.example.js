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