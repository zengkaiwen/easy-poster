const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'index.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    })
  ],
  devServer: {
    allowedHosts: '0.0.0.0',
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  }
}
