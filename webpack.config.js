const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        test: /\.css$/i,
        test: /\.html$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
