const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // production | none
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    hot: true,
    open: true,
    port: 8080
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      // rebuild的时候 是否自动删除所有未使用的webpack资源
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }
    ]
  }
}
