var path = require('path')
var webpack = require('webpack')
var extractTextWebpackPlugin = require('extract-text-webpack-plugin')
var commonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		vendors: ['react']
	},
	output: {
		path: path.resolve(__dirname, 'product', 'css'),
		filename: '../js/[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_module/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader')
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
				test: /.(eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new commonsChunkPlugin('vendors', '../js/vendors.js'),
		new extractTextWebpackPlugin('all.css', {allChunks: true})
	]
}