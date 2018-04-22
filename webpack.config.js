const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './dist/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jpg|jpeg|png|gif|bmp|webp$/, use: 'url-loader?limit=1024&name=[hash:8]-[name].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/,  use: 'url-loader' }
    ]
  }, 
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}