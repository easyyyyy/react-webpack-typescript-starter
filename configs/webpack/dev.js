// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(commonConfig, {
  mode: "development",
  entry: {
    'home': path.resolve(__dirname, '../../src/pages/app/index.tsx'),
    'cart': path.resolve(__dirname, '../../src/pages/cart/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].[hash]-bundle.js'
  },
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin(),
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
