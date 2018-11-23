const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env']
    }
  }
};

export const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/../.eslintrc'
    },
  }
};

export const CSSLoader = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    'style-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    'sass-loader'
  ]
};