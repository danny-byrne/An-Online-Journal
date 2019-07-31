const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    publicPath: "/build/",
    filename: "bundle.js"
  }
}