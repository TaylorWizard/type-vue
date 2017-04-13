const path = require('path');
const config = require('../config.json');
const baseConfig = require('./base.js');

let devConfig = baseConfig;
devConfig.devServer = {
	contentBase: path.join(__dirname, '../dist'),
	proxy: {
		// '/ugc': {
		// 	target: config.imgServer,
		// 	changeOrigin: true,
		// 	secure: true
		// }
	},
	compress: false,
	port: 8010
}
module.exports = devConfig;