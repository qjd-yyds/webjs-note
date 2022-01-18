const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/client.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 不需要这个玩意了，基础页面由服务端渲染提供
    // new HtmlWebpackPlugin({
    //   template: './public/index.html'
    // })
  ]
};
