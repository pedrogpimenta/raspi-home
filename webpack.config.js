const path = require('path');

module.exports = {
  mode: 'production',
  entry: './source/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
