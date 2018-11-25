import webpack from 'webpack';
import { AssetLoader, CSSLoader, JSLoader, ESLintLoader } from './config/webpack.loaders';
import { ProvidePlugin, StyleLintPlugin, MiniCssExtractPlugin } from './config/webpack.plugins';
import { OptimizeCssAssetsPlugin } from './config/webpack.minimizers';

module.exports = {
  entry: {
    site: './source/javascripts/site.js'
  },
  plugins: [
    StyleLintPlugin,
    MiniCssExtractPlugin,
    ProvidePlugin
  ],
  module: {
    rules: [
      JSLoader,
      ESLintLoader,
      CSSLoader,
      AssetLoader
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/.tmp/dist/javascripts'
  },
  optimization: {
    minimizer: [
      OptimizeCssAssetsPlugin
    ]
  }
};
