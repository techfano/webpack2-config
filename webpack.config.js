var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname +'/dist',
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'webpack2 config demo',
    minify: {
      collapseWhitespace: true
    },
    hash: true,
    template: 'src/index.ejs'
  })]
}
