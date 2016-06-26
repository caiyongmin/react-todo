var path = require('path')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, './app/main')
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/assets/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		devtool: 'cheap-source-map',
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: ['add-module-exports']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
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
	},
	plugins: [
		new openBrowserWebpackPlugin({
			'url': 'http://localhost:8080'
		})
	]
}