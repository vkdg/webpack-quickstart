const webpack =  require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  	// DEV config
  	mode: 'development',
  	devtool: 'source-map',
  	devServer: {
	    contentBase: baseWebpackConfig.externals.paths.home,
	    port: 8081,
	    overlay: {
    	  	warnings: true,
		  	errors: true
    	}
  	},
  	plugins: [
    	new webpack.SourceMapDevToolPlugin({
      		filename: '[file].map'
    	})
  	]
})

module.exports = new Promise((resolve, reject) => {
  	resolve(devWebpackConfig)
})
