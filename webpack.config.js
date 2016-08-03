"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
      bundle: [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/dev-server',
          './app/boot.ts'
      ]
  },
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, '/public'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  }
}
