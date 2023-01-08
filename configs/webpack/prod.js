// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: {
    'home': path.resolve(__dirname, '../../src/pages/app/index.tsx'),
    'cart': path.resolve(__dirname, '../../src/pages/cart/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].[hash]-bundle.js'
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['home'],
      filename: 'home.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['cart'],
      filename: 'cart.html'
    }),
  ],
});
