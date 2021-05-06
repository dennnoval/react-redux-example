const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	output: {
		path: `${__dirname}/build`,
		filename: '[name].[contenthash].bundle.js',
	},
	devServer: {
		port: 3000,
		watchContentBase: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|jpeg|png|svg|gif)$/,
				use: 'file-loader'
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }), 
		new ESLintPlugin({ extensions: ['js', 'jsx'] })
	]
}
