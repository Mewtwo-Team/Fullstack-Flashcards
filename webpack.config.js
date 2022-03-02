const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: "./client/index.js",
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
 mode: 'development',
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

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
 plugins: [
   new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html' 
    }),
    
    ],
  devServer: {
    proxy: {
      '/':'http://localhost:3000'
    },
    port: 8080

  }
};