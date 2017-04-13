const webpack = require('webpack');
const baseConfig = require('./base.js');

let prodConfig = baseConfig;
prodConfig.plugins = baseConfig.plugins.concat([
		new webpack.DefinePlugin({
			 'process.env': {
				 NODE_ENV: '"production"'
			 }	
	  }),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
])
module.exports = prodConfig;