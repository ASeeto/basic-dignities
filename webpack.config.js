var webpack = require('webpack');

module.exports = {
	entry: "./src/client/app.js",
	output: {
		path: './dist',
		filename: "bundle.min.js"
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,	
			compress: { warnings: false }
		})
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};