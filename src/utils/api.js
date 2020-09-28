const ENDPOINT = 'https://api.casamentoleoejeny.com.br/'

export const post = (route, body) => new Promise((resolve, reject) => {
	fetch(`${ENDPOINT}${route}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(res => {
		if (res.ok) {
			return resolve(res.json())
		}
		res.json().then(error => reject(error))
	})
	.catch(error => reject(error))
})

export const get = route => new Promise((resolve, reject) => {
	fetch(`${ENDPOINT}${route}`)
	.then(res => resolve(res.json()))
	.catch(error => reject(error))
})