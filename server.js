const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static('build'))

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 80, () => {
	console.log('Server on')
})