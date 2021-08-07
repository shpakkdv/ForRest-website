const path = require('path');

// plugins
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// TODO: check environment
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// TODO source map
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        // TODO: use url-loader
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        exclude: [
          /node_modules/,
          path.resolve('src/common/assets/download'),
        ],
        options: {
          outputPath: 'img/',
        },
      },
      {
        test: /\.(pdf|jpg|mp4)$/,
        loader: 'file-loader',
        include: path.resolve('src/common/assets/download'),
        options: {
          name: '[name].[ext]',
          outputPath: 'download/',
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      favicon: path.resolve('src/common/assets/images/favicon.png'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new UglifyJsPlugin(),
  ]
}
