const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [{ test: /\.css$/, use: ["file-loader"] }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
};
