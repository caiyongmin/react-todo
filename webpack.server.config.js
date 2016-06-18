var fs = require('fs')
var path = require('path')

module.exports = {
	entry: path.join(__dirname, 'server.js'),

	output: {
		path: path.resolve(__dirname, 'server_render'),
		filename: 'server.bundle.js'
	},

	target: 'node',

	externals: fs.readdirSync(path.join(__dirname, '/node_modules/')).concat([
		'react-dom/server', 'react/addons'
		]).reduce(function (ext, mod) {
			ext[mod] = 'commonjs ' + mod
			return ext
		}, {}),

	node: {
		__dirname: true,
		__filename: true
	},

	resolve: {
		extensions: ['', '.jsx', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					mimetype: 'application/font-woff'
				}
			},
			{
				test: /\.(eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	}
}