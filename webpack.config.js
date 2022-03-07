const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
