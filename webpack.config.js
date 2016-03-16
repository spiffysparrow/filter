'use strict';

const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const WEBPACK_PORT = 8080;

function generateEntry(path) {
  const entry = [];

  entry.push(`webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`);
  entry.push(path);

  return entry;
}

module.exports = {
  devtool: 'source-map',

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: `http://localhost:${WEBPACK_PORT}/`
  },

  entry: generateEntry('./app/index.js'),

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: PATHS.app
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2', 'react-hmre']
        },
        include: PATHS.app
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],

  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT
  }
};
