const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: "./client/index.js",
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
 mode: 'production',
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
      test: /\.png|svg|jpg|gif$/,
      use: ["file-loader"],
    }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
}