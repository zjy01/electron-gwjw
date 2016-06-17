var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3009',
    'webpack/hot/only-dev-server',
    __dirname+'/react/index.js'
  ],
  output: {
	  path: __dirname + '/dist/',
    filename: './app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
		{
			test: /\.(js|jsx)$/,
			loader: 'react-hot-loader!babel-loader?'+JSON.stringify({presets:['react','es2015']}),
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
		{
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		},
		{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}
	]
  }
};
