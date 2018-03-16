/*
    ./webpack.config.js
*/
const path = require('path');
// Import the plugin:
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();
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
  plugins: [
    HtmlWebpackPluginConfig,
    new DashboardPlugin({ port: 4000, handler: dashboard.setData })
  ],
  devServer: {
    inline:true,
    port: 4000
  }
}
