import webpack from 'webpack';
import { WOWLoader, CSSLoader, JSLoader, ESLintLoader } from './config/webpack.loaders';
import { StyleLintPlugin, MiniCssExtractPlugin } from './config/webpack.plugins';
import { UglifyJsPlugin, OptimizeCssAssetsPlugin } from './config/webpack.minimizers';

module.exports = {
  entry: {
    site: './source/javascripts/site.js'
  },
  plugins: [
    StyleLintPlugin,
    MiniCssExtractPlugin
  ],
  module: {
    rules: [
      JSLoader,
      ESLintLoader,
      CSSLoader
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/.tmp/dist/javascripts'
  },
  optimization: {
    minimizer: [
      UglifyJsPlugin,
      OptimizeCssAssetsPlugin
    ]
  }
};
