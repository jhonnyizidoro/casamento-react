const ENDPOINT = 'https://servicodados.ibge.gov.br/api/v1/'

export const getFromIBGE = route => new Promise((resolve, reject) => {
	fetch(`${ENDPOINT}${route}`)
	.then(res => res.json())
	.then(resultArray => {
		const ordered = resultArray.sort((a, b) => a.nome.localeCompare(b.nome))
		resolve(removeDuplicateEntries(ordered))
	})
	.catch(error => reject(error))
})

const removeDuplicateEntries = array => {
	return array.filter((item, index, self) =>
		index === self.findIndex((t) => (
			t.nome === item.nome
		)),
	)
}