/*
    ./webpack.config.js
*/
const path = require('path');

// HTML Webpack to render all html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

// Main webpack settings
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
              test: /\.jsx?$/,
              loader: 'babel-loader',
               exclude: /node_modules/,
              query:
              {
                  presets:['es2015', 'react'],
                  compact: false
              }
            },
            {
               test: /\.css$/,
               use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            }
      ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    inline:true,
    port: 4000
  }
}
