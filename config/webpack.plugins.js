import path from 'path';
import _StyleLintPlugin from 'stylelint-webpack-plugin';
import _MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, '../stylelint.config.js'),
  context: path.resolve(__dirname, '../source/stylesheets'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
});

export const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '../stylesheets/[name].css'
});

export const ProvidePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});