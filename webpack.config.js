const path = require('path')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   index: './src/index.js',
  //   print: './src/print.js',
  // },
  devServer: {
    contentBase: './public',
  },
  output: {
    filename: 'bundle.js',
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  }
}