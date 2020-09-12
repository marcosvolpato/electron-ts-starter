const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/front/front.ts',
  devtool: 'inline-source-map',
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
              include: [
                  path.resolve(__dirname, "src/front")
              ],
          },
      ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'front.bundle.js',
    path: path.resolve(__dirname, 'dist/main'),
  },
};