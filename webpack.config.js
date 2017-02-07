var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'src/client/public');
var APP_DIR = path.join(__dirname, 'src/client/app');

var config = {
  context: path.join(__dirname, "src/client"),
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    //publicPath: "assets/",
  },
  devServer:{
    inline:true,
    port:8080,
    contentBase: 'src/client'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;