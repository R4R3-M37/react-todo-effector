const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	devtool: 'source-map',
	entry: './src/index.js',
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CssMinimizerPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	],
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		historyApiFallback: true
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()]
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src/')
		}
	},

	module: {
		rules: [
			{ test: /\.(html)$/, use: ['html-loader'] },
			{
				test: /.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}
