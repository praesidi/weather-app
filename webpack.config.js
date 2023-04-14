const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: './dist',
	},
	module: {
		rules: [
			{
				test: /\.(sass|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
