import _UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import _OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export const UglifyJsPlugin = new _UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true
});

export const OptimizeCssAssetsPlugin = new _OptimizeCssAssetsPlugin({});
