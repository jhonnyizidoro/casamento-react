const express = require('express')
const compression = require('compression')
const { join } = require('path')
const app = express()

app.use((req, res, next) => {
	if ((req.headers['x-forwarded-proto'] || '').endsWith('http')) {
		res.redirect(`https://${req.headers.host}${req.url}`)
	} else {
		next()
	}
})

app.use(express.static('build'))
app.use(compression())

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 80, () => {
	console.log('Server on')
})