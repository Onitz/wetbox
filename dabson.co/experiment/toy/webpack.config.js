let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [],
  output: {},
  mode: "development",
  plugins: [ 
    new HtmlWebpackPlugin({template:"./index.html"}),
    new HtmlWebpackPlugin({template:"./milkydrop/circlenoshader.html"})
  ]
};