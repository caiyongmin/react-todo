var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(express.static(path.join(__dirname, 'product')))

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '/product/index.html'))
})

var PORT = process.env.PORT || 8080

app.listen(PORT, function () {
	console.log('App run on product server at localhost:' + PORT)
})