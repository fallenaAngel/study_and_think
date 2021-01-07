const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
  mode: 'development', // production | none
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    host: '127.0.0.1',
    hot: true,
    open: true,
    port: 8080
  }
});