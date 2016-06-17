import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, ReactContext} from 'react-router'
import routes from './app/router/routes'

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'product')))

app.get('*', (req, res) => {
	match({routes: routes, location: req.url}, (err, redirect, props) => {
		if (err) {
			res.status(500).send(err.message)
		}
		if (redirect) {
			res.redirect(redirect.pathname + redirect.search)
		}

		const appHTML = renderToString(<ReactContext {...props}/>)

		res.sendFile(renderPage(appHTML))
	})
})

function renderPage(appHTML) {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>任务清单</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="apple-mobile-web-app-capale" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="email=no">
	</head>
	<body>
		<div id="app">${appHTML}</div>

		<script src="./assets/bundle.js"></script>
		<script>
			var clientHeight = document.documentElement.clientHeight
			var sectionBody = document.getElementById('section-body')
			sectionBody.style.minHeight = clientHeight - 100 + 'px'
		</script>
	</body>
	</html>
	`
}

var PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log('App run on product server at localhost:' + PORT)
})