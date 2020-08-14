const ENDPOINT = 'http://localhost/api/'

export const post = (route, body) => new Promise((resolve, reject) => {
	fetch(`${ENDPOINT}${route}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(res => resolve(res.json()))
	.catch(error => reject(error))
})

export const get = route => new Promise((resolve, reject) => {
	fetch(`${ENDPOINT}${route}`)
	.then(res => resolve(res.json()))
	.catch(error => reject(error))
})