module.exports = {
  entry: [
	'./js/app.js'
	],
  output: {
    filename: 'js/out.js'
},

devServer: {

	inline: true,
	contentBase: './',
	port: 3001

},

watch: true,

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Exclude /node_modules directory
        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.js/,

        // Options to configure babel with
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}
