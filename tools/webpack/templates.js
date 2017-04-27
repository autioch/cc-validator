const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/* Adds support for the base html file. */
module.exports = function templates(webpackConfig, setup) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(setup.sourcePath, 'index.html'),
      filename: 'index.html',
      allChunks: true
    })
  );
};
